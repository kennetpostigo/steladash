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

var Radio = require('react-native-simple-radio-button');



module.exports = React.createClass({
  getInitialState: function () {
    return {
      button: {
        name: 'dominos',
        img: './../../assets/DashButton.png',
        userDetails: {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        },
        perperoni: 0,
        cheese: 0,
        chickenWings: 0,
        breadSticks: 0
      },
      show: true,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    return fetch('http://192.168.15.81:6200/dominoes/getCustomer/0',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((res) => {
        var splitAdd = res.customer.address.split(',');
        this.setState({
           button: {
            name: 'dominos',
            img: './../../assets/DashButton.png',
            userDetails: {id: res.customer.id, firstName: res.customer.firstName, lastName: res.customer.lastName, email: res.customer.email, phone: res.customer.phone, address: splitAdd[0], city: splitAdd[1], state: splitAdd[2], zip: splitAdd[3]}
           }
        });
      })
    .done();
  },
  render: function() {
    var radio_peperoni = [
      {label: 'No', value: 0 },
      {label: 'Yes', value: 1 },
    ];
    var radio_cheese = [
      {label: 'No', value: 0 },
      {label: 'Yes', value: 1 },
    ];
    var radio_chickenWings = [
      {label: 'No', value: 0 },
      {label: 'Yes', value: 1 },
    ];
    var radio_breadSticks = [
      {label: 'No', value: 0 },
      {label: 'Yes', value: 1 },
    ]
    return (
      <View>
        <Text style={styles.title}>Dominos Button Settings</Text>
        <Text>Personal Information</Text>
          <TextInput style={styles.input} ref="fName" value={this.state.button.userDetails.firstName} placeholder="First Name"/>
          <TextInput style={styles.input} ref="lName" value={this.state.button.userDetails.lastName} placeholder="Last Name"/>
          <TextInput style={styles.input} ref="email" value={this.state.button.userDetails.email} placeholder="Email"/>
          <TextInput style={styles.input} ref="phone" value={this.state.button.userDetails.phone.toString()} placeholder="Phone"/>
          <TextInput style={styles.input} ref="address" value={this.state.button.userDetails.address} placeholder="Address"/>
          <TextInput style={styles.input} ref="city" value={this.state.button.userDetails.city} placeholder="City"/>
          <TextInput style={styles.input} ref="state" value={this.state.button.userDetails.state} placeholder="State"/>
          <TextInput style={styles.input} ref="zip" value={this.state.button.userDetails.zip} placeholder="Zip"/>

          <Text>Order Information</Text>
            <Text>Peperoni:</Text><Radio radio_props={radio_peperoni} initial={0} formHorizontal={true} labelHorizontal={true} buttonColor={'#2196f3'} onPress={(value) => {this.setState({peperoni:value})}}/>
            <Text>Cheese:</Text><Radio radio_props={radio_cheese} initial={0} formHorizontal={true} labelHorizontal={true} buttonColor={'#2196f3'} onPress={(value) => {this.setState({cheese:value})}}/>
            <Text>Chicken Wings::</Text><Radio radio_props={radio_chickenWings} initial={0} formHorizontal={true} labelHorizontal={true} buttonColor={'#2196f3'} onPress={(value) => {this.setState({chickenWings:value})}}/>
            <Text>BreadSticks:</Text><Radio radio_props={radio_breadSticks} initial={0} formHorizontal={true} labelHorizontal={true} buttonColor={'#2196f3'} onPress={(value) => {this.setState({breadSticks:value})}}/>
          <TouchableHighlight style={styles.submitInfo} onPress={this.submitOptions}><Text style={styles.btnText}>Submit Information</Text></TouchableHighlight>
      </View>
    );
  },
  updateForm: function () {
    this.setState({
      name: 'dominos',
      img: './../../assets/DashButton.png',
      userDetails:{
        firstName: this.refs.fName,
        lastName: this.refs.lName,
        email: this.refs.email,
        phone: this.refs.phone,
        address: this.refs.address,
        city: this.refs.city,
        state: this.refs.state,
        zip: this.refs.zip
      }
    })
  },
  submitOptions: function () {
    this.updateForm();
    var address = this.state.button.userDetails.address + "," + this.state.button.userDetails.city + "," + this.state.button.userDetails.state + "," + this.state.button.userDetails.zip
    fetch('http://192.168.15.81:6200/dominoes/updateCustomer', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customer: {
          id: this.state.button.userDetails.id,
          firstName: this.state.button.userDetails.firstName,
          lastName: this.state.button.userDetails.lastName,
          email: this.state.button.userDetails.email,
          phone: this.state.button.userDetails.phone,
          address: address,
          orderDetails:{
            peperoni: this.state.peperoni,
            cheese: this.state.cheese,
            chickenWings: this.state.chickenWings,
            breadSticks: this.state.breadSticks,
          }
        },
      })
    });
    this.props.navigator.push({
      id: 'ButtonList',
      name: 'ButtonList'
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 10,
    marginBottom: 4,
    height: 15,
    textAlign: 'center',
    backgroundColor: '#3B3738',
    color: '#ffffff',
    justifyContent: 'center',
  },
  submitInfo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#2ecc71',
    height: 20
  },
  input: {
    height: 35
  },
  btnText: {
    color: '#ffffff',
    fontSize: 10
  },
});

//email
//firstName
//lastName
//address
//phone
//
//
