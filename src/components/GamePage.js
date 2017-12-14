import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/action';
import { withRouter } from 'react-router';
import GameHeader from './GameHeader';
import GamePaused from './GamePaused';
import GameWon from './GameWon';
class GamePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPaused:false,
            showWon:false
        }
    }
    componentWillMount() {
        this.props.gameAction.loadGame();
        if(this.props.gameData.selectedImage === '' || this.props.gameData.selectedSize.length === 0 ){
            this.onQuit();    
        }
    }
    componentDidMount(){
        this.startTimer();
    }
    startTimer(){
        this.timer = setInterval(()=>this.props.gameAction.incrementTime(),1000);
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    selectCell(index){
        this.props.gameAction.selectCell(index);
    }
    gamePaused(){   
        this.setState({showPaused:true});
        this.stopTimer();
    }
    onResume(){
        this.startTimer();
        this.setState({showPaused:false});
    }
    onQuit(){
        this.setState({showWon:false});
        this.props.history.replace('/')
    }
    componentWillUnmount(){
        this.stopTimer();
        this.props.gameAction.resetGame();
    }
    showWon(){
        this.setState({showWon:true});
        this.stopTimer();
    }
    componentWillReceiveProps(nextProps){
        if(this.props.gameData.won !== nextProps.gameData.won && nextProps.gameData.won){
            this.showWon();
        }
    }
    render() {
        let {outerDivStyle,cells,prevSelected} = this.props.gameData;
        let {moveCount,timeLapsed} = this.props.gameData;
        let cellElement = cells.map((cell,index)=>(
             <div className={prevSelected === index?'cell hoverable selected':'cell hoverable'}  style={cell.style} 
                    key={cell.index} onClick={this.selectCell.bind(this,index)}>
                    </div>
        ));
        return (
            <div>
                <GameHeader onPause={this.gamePaused.bind(this)} moves={moveCount} timeLapsed={timeLapsed}></GameHeader>
                <div className='game-area' style={outerDivStyle}>
                    {cellElement}
                </div>
                <GamePaused selImage={this.props.gameData.selectedImage} 
                onResume={this.onResume.bind(this)} onQuit={this.onQuit.bind(this)} show={this.state.showPaused}></GamePaused>
                <GameWon onQuit={this.onQuit.bind(this)} moves={moveCount} timeLapsed={timeLapsed} show={this.state.showWon}></GameWon>
            </div>
        )
    }
}
export default connect(
    (store)=>({gameData:store.game}),
    (dispatch)=>({gameAction : bindActionCreators(actions,dispatch)})
)(withRouter(GamePage));