import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Animated,  Dimensions } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state ={
      scrollY: new Animated.Value(0)
    }
  }
  render() {
    const headerHeight =this.state.scrollY.interpolate({
      inputRange:[0,300],
      outputRange:[400,100],
      extrapolate:'clamp'
    })
    return (
  <View style= {{flex:1}}>
      <Animated.View style={{
        
        top:0,
        left:0,
        right:0,
        backgroundColor:'#000',
        height: headerHeight,
        zIndex:1,
      }}>
      
          <ScrollView
            horizontal={true}
            pagingEnabled={true} scrollEventThrottle = {16}>


      <View style = {styles.headercontainer}>
      <Image style = {styles.headerbg}

        source ={require('./assets/profile1.png')}
      />
      </View>
      <View style = {styles.headercontainer}>
      <Image style = {styles.headerbg}

        source ={require('./assets/profile2.png')}
      />
      </View>
      <View style = {styles.headercontainer}>
      <Image style = {styles.headerbg}

        source ={require('./assets/profile3.png')}
      />
      </View>
      </ScrollView>
      
      </Animated.View>
      <ScrollView style={{flex:1,borderTopLeftRadius:10, borderTopRightRadius:10}}
        scrollEventThrottle = {1}
        bouncesZoom={true}
      onScroll ={Animated.event(
        [{nativeEvent:{contentOffset:{y: this.state.scrollY}}}]
      )}
      >
        <View style= {{
          height: 100,
          width:100,
          borderRadius: 50,
          overflow: 'hidden',
          marginTop: -50,
          marginLeft:150,
          
          
        }}>
        <Image style = {{flex:1, width: 100, height: 100, position:'absolute'}}
                source ={require('./assets/profile1.png')}>

        </Image>
        </View>
        <Text style ={{fontSize: 26, marginLeft:100}}>Srinivas gaddam</Text>
        <View style ={{height:1000}}></View>
      </ScrollView>


  
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
