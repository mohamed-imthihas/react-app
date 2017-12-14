import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { withRouter } from 'react-router';
import './App.css';
class App extends Component {
   
    render() {
        return ( 
            <div className='center-align'>
                <h1 className='grey-text'>Name of the application</h1>
                <Button raised color="primary" onClick={()=>this.props.history.push('/imageSelect')}><Icon>send</Icon> Start</Button>
             </div>
        );
    }
}

export default withRouter(App);