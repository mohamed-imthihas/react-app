import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
class GameHeader extends Component {
    componentDidMount() {        
    }
    render() {
        return ( 
            <div className='game-header'>
                <div className="bold-large-text left-align">No. of Moves:{this.props.moves}</div>
                <div className='center-align'>
                    <Button fab mini className='teal' color='contrast' onClick = {this.props.onPause}><Icon>pause_circle_outline</Icon></Button>
                </div>
                <div className='bold-large-text right-align'>Time:{this.props.timeLapsed}</div>
            </div>
        );
    }
}
export default GameHeader;