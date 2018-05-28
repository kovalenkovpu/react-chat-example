import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './EnterName.css';
import Input from "@material-ui/core/Input";

const styles = theme => ({
    button: {
        margin: '20px auto',
    },
    input: {
        width: '100%',
    },
});

class EnterName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onClick(name) {
        const { setName } = this.props;

        setName(name);
    }

    render() {
        const { classes } = this.props;
        const { name } = this.state;

        return (
            <div className="enter-name-wrapper">
                <Input
                    id="message"
                    label="Enter your name"
                    type="text"
                    className={classes.input}
                    margin="normal"
                    onChange={e => this.onChange(e)}
                    value={name}
                    key={'en-1'}
                />
                <Button
                    variant="raised"
                    color="secondary"
                    className={classes.button}
                    onClick={() => this.onClick(name)}
                    key={'en-2'}
                >
                    Enter Name
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(EnterName);