import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Animated
} from 'react-native';
const Item_width = Dimensions.get('window').width
export default class Favorites extends Component {
  render() {
    return (
      <ScrollView scrollEventThrottle = {16} style= {{flex:1,height:Dimensions.get('window').height}}>

          <View style={styles.container1}>
        <View style={styles.container}>

        <View style={styles.column1}>
          <Image style={styles.image} source ={require('./img10.jpg')}/>
        </View>
        <View style={styles.column1}>
          <Image style={styles.image1} source ={require('./img8.jpg')}/>
        </View>
        <View style={styles.column1}>
          <Image style={styles.image2} source ={require('./img9.jpg')}/>
        </View>
        </View>
        <View style={styles.container}>

<View style={styles.column1}>
  <Image style={styles.image2} source ={require('./img3.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image1} source ={require('./img1.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image} source ={require('./img7.png')}/>
</View>

</View>

<View style={styles.container}>

<View style={styles.column1}>
  <Image style={styles.image1} source ={require('./img2.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image} source ={require('./img4.jpg')}/>
</View>
<View style={styles.column1}>
  <Image style={styles.image2} source ={require('./img6.jpg')}/>
</View>



        </View>

        </View>



      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

container: {
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: 5,

  backgroundColor: '#fff'
},
container1: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 5,

  backgroundColor: '#fff'
},

column1: {
  margin: 2,
  width: (Item_width / 3) - 9
},

image: {
  height: 168.42,
  width: null,
  borderRadius: 10
},
image1: {

  height: 186.22,
  width: null,
  borderRadius: 10
},
image2: {
  height: 197.63,
  width: null,
  borderRadius: 10
}
});
