Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  })

  Meteor.subscribe("messages");

  Meteor.startup(function () {
    React.render(<App />, document.getElementById('render-room'));
  });
}

Meteor.methods({
  createMessage(message) {
    Messages.insert({
      text: message,
      createdAt: new Date(),
      senderId: Meteor.userId(),
      username: Meteor.user().username
    });
  }
})

if (Meteor.isServer) {
  Meteor.publish("messages", function() {
    return Messages.find({});
  });
}
