var React = require('react');
var ReactDOM = require('react-DOM');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello Fatty! </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
