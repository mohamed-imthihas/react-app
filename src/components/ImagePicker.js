import React, { Component } from 'react';
import Icon from 'material-ui/Icon';
import $ from 'jquery';
class ImagePicker extends Component {
    openImageSelect(){
        $('#customImage').click();
    }
    customImage(e){
        let imageFile = e.target.files[0];
        if (imageFile == null) {
            return;
        }
        var reader = new FileReader();
        reader.onload = (e) => {
            this.props.onCustomImage(e.target.result);
        }
        reader.readAsDataURL(imageFile);
    }
    render() {
        return ( 
            <div className='image-picker valign-wrapper hoverable' onClick={this.openImageSelect}>
                <Icon className='large'>add</Icon>
                <h6>Use own image</h6>
                <input type="file" accept="image/*" className='hide' id='customImage' onChange={(e)=>this.customImage(e)} />
            </div>
        );
    }
}
export default ImagePicker;