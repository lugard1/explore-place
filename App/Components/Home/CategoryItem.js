import { View, Text, Image } from 'react-native'
import React from 'react';
import Colors from './../../Shared/Colors';

export default function CategoryItem({ category }) {
  return (
    <View style={{padding: 5, alignItems: 'center',
    margin: 5, width:100, height: 100, backgroundColor: Colors.white,
    justifyContent: 'center', borderRadius: 10, elevation: 1}}>
      <Image source={category.icon}
        style={{width:50, height:50}}
       />
      <Text style={{fontSize: 13, fontFamily: 'raleway-regular'}}>{category.name}</Text>  
    </View>
  )
}