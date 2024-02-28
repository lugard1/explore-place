import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: 'Gas Station',
      value: 'gas_station',
      icon: require('./../../../assets/images/gas.png')
    },
    {
      id: 2,
      name: 'Restaurant',
      value: 'restaurant',
      icon: require('./../../../assets/images/food.png')
    },
    {
      id: 3,
      name: 'Cafe',
      value: 'cafe',
      icon: require('./../../../assets/cafe.png')
    }
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{
        fontSize: 15,
        fontFamily: 'raleway-regular'
      }}>Select Top Category</Text>
      <FlatList 
        data={categoryList} // Corrected here
        horizontal={true}
        renderItem={({item}) => ( // Added parentheses to wrap the JSX
          <View>
            <CategoryItem category={item} />
          </View>
        )}
      />
    </View>
  );
}
