import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './SendMessage.css';
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginTop:  theme.spacing.unit * 3
    },
    textField: {
        width: '100%',
        margin: '20px auto',
    },
});

class SendMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
    }

    onChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    onClick(message) {
        const { sendMessage } = this.props;

        sendMessage(message);

        this.setState({
            message: ''
        });
    }

    render() {
        const { classes } = this.props;
        const { message } = this.state;

        return ([
            <TextField
                id="message"
                label="Send message"
                type="text"
                className={classes.textField}
                margin="normal"
                onChange={e => this.onChange(e)}
                value={message}
                key={'sm-1'}
            />,
            <Button
                variant="raised"
                color="primary"
                className={classes.button}
                onClick={() => this.onClick(message)}
                key={'sm-2'}
            >
                Send Message
            </Button>
        ])
    }
}

export default withStyles(styles)(SendMessage);