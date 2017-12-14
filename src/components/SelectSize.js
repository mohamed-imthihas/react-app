import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectGrid} from '../actions/action';
import { withRouter } from 'react-router';
import Button from 'material-ui/Button';
class SelectSize extends Component {
    selectGridSize(gridSize){
        this.props.dispatch(selectGrid(gridSize));
        this.props.history.replace('/gamePage');
    }
    render() {
        let gridSizes = this.props.gridSizes;        
        let gridsElement  = gridSizes.map((grid,index)=>{
            return <Button raised  color='contrast' key={index} className='orange btn-large' onClick={this.selectGridSize.bind(this,grid)}>{grid[0]+"X"+grid[1]}</Button>
        })
        return ( 
        <div className='center-align'>
            <h2>Select Size</h2>
            <div className='grid-container'>
            {gridsElement}
            </div>
        </div>
        );
    }
}
export default connect(
    (store)=>({gridSizes:store.common.gridSizes})
)(withRouter(SelectSize));