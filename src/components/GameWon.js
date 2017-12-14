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
class GameWon extends Component {
    render() {
        return ( 
            <Dialog
            open={this.props.show}>
            <DialogTitle className={this.props.classes.center}>{"Won"}</DialogTitle>
            <DialogContent>
                <div className={this.props.classes.center}>
                    <h5>No. of moves : {this.props.moves}</h5>
                    <h5>Time Taken : {this.props.timeLapsed} seconds</h5>
                </div>
            </DialogContent>
            <DialogActions className={this.props.classes.center}>
              <Button raised onClick={this.props.onQuit} color="contrast" className='red'>
              <Icon>close</Icon>Close
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
}
export default withStyles(styles)(GameWon);