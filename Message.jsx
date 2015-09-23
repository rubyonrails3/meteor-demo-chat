Message = React.createClass({
  render() {
    return <p>{this.props.message.username}: {this.props.message.text}</p>;
  }
});
