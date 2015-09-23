AccountsUIWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(
      Template.loginButtons,
      this.refs.container.getDOMNode()
    );
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },

  render() {
    return <span ref="container" />;
  }
});
