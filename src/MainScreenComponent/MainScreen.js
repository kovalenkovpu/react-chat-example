import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Button';
import './MainScreen.css';
import MessageList from '../MessageListComponent/MessageList';
import SendMessage from "../SendMessageComponent/SendMessage";
import EnterName from "../EnterNameComponent/EnterName";

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: '0 auto',
        display: 'block'
    }),
});

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: {},
            name: 'Anonymous'
        };

        this.database = null;

        this.sendMessage = this.sendMessage.bind(this);
        this.setName = this.setName.bind(this);
        this.listenUserData = this.listenUserData.bind(this);
    }

    writeUserData(message, name) {
        this.database.ref('/')
            .push()
            .set({
                message,
                name,
            });
    }

    listenUserData() {
        this.database.ref('/').on('value', snapshot => {
            const messages = snapshot.val();

            if (messages === 'undefined' || messages === null)
                this.setState({
                    messages: {}
                });
            else this.setState({ messages });
        });
    }

    sendMessage(message) {
        const { messages, name } = this.state;

        this.setState({
            messages: [ message, ...messages ]
        }, () => this.writeUserData(message, name));
    }

    setName(name) {
        this.setState({
            name
        });
    }

    componentDidMount() {
        const { firebase } = this.props;

        if (this.database === null) this.database = firebase.database();

        this.listenUserData();
    }

    render() {
        const { classes } = this.props;
        const { messages } = this.state;

        return (
            <Paper elevation={4} className={classes.root}>
                <EnterName setName={this.setName} />
                <MessageList messages={messages}/>
                <SendMessage sendMessage={this.sendMessage} />
            </Paper>
        )
    }
}

export default withStyles(styles)(MainScreen);