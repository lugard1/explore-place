import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
// import { Image } from 'react-native'

export default function Header() {
  return (
    <View>
      <Image source={require('./../../../assets/logo.png')}
      style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50
  }
})
