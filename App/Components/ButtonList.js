'use strict';

var React = require('react-native');


var {
  Image,
  Navigator,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

module.exports =  React.createClass({
  getInitialState:function () {
    return {
      button: {name: 'dominos', img: './../../assets/DashButton.png', orderDetails: {}},
      show: true
    };
  },
  render: function() {
    if(this.state.show){
      return (<View>
        <Text style={styles.title}>Your Stela Buttons</Text>
        <TouchableHighlight onPress={this.changeRoute} style={styles.btn}><Image source={require('./../../assets/DashButton.png')} style={styles.DashButton}></Image></TouchableHighlight>
        <TouchableHighlight onPress={this.removeButton} style={styles.removeItem}><Text style={styles.btnText}>Remove Dominos Button</Text></TouchableHighlight>
      </View>);
    } else{
      return (
        <View>
          <Text style={styles.title}>Your Stela Buttons</Text>
        </View>
      )
    }
  },
  changeRoute: function () {
    this.props.navigator.push({
      id: 'ButtonSettings',
      name: 'ButtonSettings'
    });
  },
  removeButton: function () {
    this.setState({button: {}, show: false});
  },
  itemCheck: function () {
     if(this.state.show) {
      return styles.DashButton;
    } else{
      return styles.DashButtonNone;
    }
  },
  styleCheck: function () {
     if(this.state.show){
      return styles.removeItem;
    } else{
      return styles.removeItemNone;
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 8,
    height: 60,
    textAlign: 'center',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    justifyContent: 'center',
  },
  btn:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  DashButton: {
    flex: 1,
    flexDirection: 'row',
    resizeMode:'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 245
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingTop: 20
  },
  removeItem:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#DD2838',
    height: 60
  }
});
