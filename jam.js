import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Animated,  Dimensions } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Rated from './screens/Rated.js';
import Credits from './screens/Credits.js';
import Favorites from './screens/Favorites.js';
import Header from './screens/Header.js'
export default class App extends React.Component {


  render() {

    return (

      <View style ={{flex:1}}>

          
      <ScrollableTabView style={{ height:20,marginTop: 30, marginBottom:0}}
              initialPage={0}>
                <Rated tabLabel="Rated" />
                <Favorites tabLabel="Favorites" />
                <Credits tabLabel="Credits" />
              </ScrollableTabView>
  </View>
      );
  }
}

const styles = StyleSheet.create({
  headercontainer:{
    flex:1,
    width: Dimensions.get('window').width,
    height: 400,


  },
headerbg:{
  flex: 1,
  width: null,
  height: null,


},
});
