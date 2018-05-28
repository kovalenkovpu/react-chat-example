import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './MessageList.css';

const styles = theme => ({
    card: {
        minWidth: 275,
        maxHeight: 400,
        overflowY: 'scroll'
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        textAlign: 'left',
    },
    pos: {
        marginBottom: 12,
    },
});

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: props.messages || {}
        };

    }

    componentWillReceiveProps(nextProps) {
        const { messages } = nextProps;

        this.setState({
            messages
        });
    }

    render() {
        const { classes, messages } = this.props;
        const messagesArr = Object.keys(messages);

        return (
            <div>
            <Card className={classes.card}>
                <CardContent>
                    {messagesArr.map((messageKey, index) => {
                        return (
                            <Typography
                                component="p"
                                className={classes.title}
                                color="textSecondary"
                                key={index}
                            >
                                {`${messages[messageKey].name}: ${messages[messageKey].message}`}
                                <Divider light/>
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
            </div>
        )
    }
}

export default withStyles(styles)(MessageList);