'use strict';

var React = require('react-native');


var {
  Image,
  Navigator,
  TouchableHighlight,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../../assets/stelaDash.png')}
          style={styles.logo}
          ></Image>
        <Text style={styles.title}>StelaDash</Text>
        <TouchableHighlight style={styles.button} onPress={this.changeRoute}><Text style={styles.btnText}>Go to Dash Buttons</Text></TouchableHighlight>
      </View>
    );
  },
  changeRoute: function(row){
  this.props.navigator.push({
    id: 'ButtonList',
    name: 'ButtonList'
  });
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  title: {
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'center',
    color: "#ffffff",
    marginTop: 30
  },
  logo: {
    flexDirection: 'column',
    width: 250,
    height: 250
  },
  button:{
    backgroundColor: '#27ae60',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 3,
    marginTop: 15
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    margin: 5
  }
});
