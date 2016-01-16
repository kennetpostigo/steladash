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

var Home = require('./App/Components/Home.js');
var ButtonList = require('./App/Components/ButtonList.js');
var ButtonSettings = require('./App/Components/ButtonSetting.js');

var steladash = React.createClass({
  render: function() {
    return (
      <Navigator initialRoute={{id: 'Home', name: 'Home'}} renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  },
  renderScene: function(route, navigator){
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'ButtonList':
        return (<ButtonList navigator={navigator} title={route.title} post={route.post}/>);
      case 'ButtonSettings':
        return (<ButtonSettings navigator={navigator} />);
    }
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
