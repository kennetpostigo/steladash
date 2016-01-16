'use strict';

var React = require('react-native');


var {
  Image,
  Navigator,
  TouchableHighlight,
  ListView,
  TextInput,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      button: {name: 'dominos', img: './../../assets/DashButton.png', orderDetails: {firstName: 'Kennet', lastName: 'Postigo', email: 'kpo@gmail.com', phone: '7861111111', address: '129871 sw 111st ST', city: 'Miami', state: 'FL', zip: '33032'}},
      show: true,
    };
  },
  render: function() {
    return (
      <View>
        <Text style={styles.title}>Dominos Button Settings</Text>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.firstName}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.lastName}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.email}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.phone}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.address}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.city}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.state}/>
          <TextInput style={styles.input} defaultValue={this.state.button.orderDetails.zip}/>
          <TouchableHighlight style={styles.submitInfo}><Text style={styles.btnText}>Submit Information</Text></TouchableHighlight>
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
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 8,
    height: 60,
    textAlign: 'center',
    backgroundColor: '#3B3738',
    color: '#ffffff',
    justifyContent: 'center',
  },
  submitInfo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#ffffff',
    backgroundColor:'#2ecc71',
    height: 30
  },
  input: {
    height: 50
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16
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

//email
//firstName
//lastName
//address
//phone
