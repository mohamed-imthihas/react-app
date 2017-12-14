import React, { Component } from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
  } from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    center: {
      textAlign:'center',
      justifyContent:'center'
    }
  });
class GamePaused extends Component {
    render() {
        return ( 
            <Dialog
            open={this.props.show}>
            <DialogTitle className={'bold-large-text ' +this.props.classes.center}>{"Paused"}</DialogTitle>
            <DialogContent>
                <div className={this.props.classes.center}><img src={this.props.selImage} alt=''/></div>
            </DialogContent>
            <DialogActions className={this.props.classes.center}>
              <Button raised onClick={this.props.onResume} color="primary">
                <Icon>refresh</Icon> Resume
              </Button>
              <Button raised onClick={this.props.onQuit} color="contrast" className='red'>
              <Icon>close</Icon>Quit
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
}
export default withStyles(styles)(GamePaused);