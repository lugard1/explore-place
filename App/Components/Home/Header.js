import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
// import { TextInput } from 'react-native-paper'

export default function Header() {
  return (
    <View style={{display: 'flex', flexDirection: 'row',
    justifyContent: 'space-evenly', alignItems: 'center', gap: 10}}>
      <Image source={require('./../../../assets/logo.png')}
      style={styles.logo} />
      <View>
        <TextInput placeholder='Search' 
          style={styles.searchBar}
        />
      </View>
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={styles.userimage} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius:100,
    paddingLeft:10,
    width: Dimensions.get('screen').width*0.6
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 100
  }
})
