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

module.exports =  React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Stela Buttons</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
  fontSize: 20,
  marginBottom: 8,
  textAlign: 'center',
  backgroundColor: '#3B3738',
  color: '#ffffff',
  height: 30
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
