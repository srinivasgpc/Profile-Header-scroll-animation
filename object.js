<ScrollView style={{flex:1,borderTopLeftRadius:10, borderTopRightRadius:10}}
        scrollEventThrottle = {16}
      onScroll ={Animated.event(
        [{nativeEvent:{contentOffset:{y: this.state.scrollY}}}]
      )}
      >
        <View style= {{
          height: 100,
          width:100,
          borderRadius: 50,
          overflow: 'hidden',
          marginTop: 350,
          marginLeft:150,
          
        }}>
        <Image style = {{flex:1, width: 100, height: 100}}
                source ={require('./assets/profile1.png')}>

        </Image>
        </View>
        <Text style ={{fontSize: 26, marginLeft:100}}>Srinivas gaddam</Text>
        <View style ={{height:1000}}></View>
      </ScrollView>