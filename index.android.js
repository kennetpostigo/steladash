'use strict';

var React = require('react-native');


var {
  AppRegistry,
  Image,
  Navigator,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var steladash = React.createClass({
  render: function() {
    return (

    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
  fontSize: 20,
  marginBottom: 8,
  textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('steladash', () => steladash);
