App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}, { sort: { createdAt: 1 }}).fetch(),
      currentUser: Meteor.user()
    }
  },

  renderMessages() {
    return this.data.messages.map((message) => { 
      return <Message key={message._id} message={message} />
    });
  },

  handleSubmit(event) {
    event.preventDefault()

    let message = this.refs.messageInput.getDOMNode().value;

    Meteor.call('createMessage', message);

    this.refs.messageInput.getDOMNode().value = '';
    setTimeout(function() {
    document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;
    }, 200);
  },

  render() {
    return (
      <div className="chatroom">
        <AccountsUIWrapper /><br />
        <div className="messages" ref="messageList" style={{overflow: 'scroll', height: '200px' }}>
          {this.renderMessages()}
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Type your message here.."
            ref="messageInput" />
        </form>

      </div>
    );
  }
});
