import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectImage} from '../actions/action';
import ImagePicker from './ImagePicker';
import { withRouter } from 'react-router';
class SelectImage extends Component {
    componentDidMount() {        
    }
    selectImage(image){
        this.props.dispatch(selectImage(image));
        this.props.history.replace('/gridSelect');
    }
    render() {
        let images = this.props.images;
        let imageElements = images.map((image,index)=><img className="hoverable" key={index} src={image} alt='' onClick={this.selectImage.bind(this,image)}/>)
        return ( 
        <div className='center-align'>
            <h2>Select Image</h2>
            <div className='grid-container'>
            {imageElements}
            <ImagePicker onCustomImage={this.selectImage.bind(this)}></ImagePicker>
            </div>
        </div>
        );
    }
}
export default connect(
    (store)=>({images:store.common.images})
)(withRouter(SelectImage));