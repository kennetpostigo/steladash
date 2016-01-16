'use strict';

var React = require('react-native');


var {
  Image,
  Navigator,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <Text>This is ButtonSettings.</Text>
      </View>
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
