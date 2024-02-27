import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryItem({ category }) {
  return (
    <View>
      <Image source={category.icon}
        style={{width:50, height:50}}
       />
      <Text>{category.name}</Text>
    </View>
  )
}