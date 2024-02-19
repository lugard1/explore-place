import { View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';

export default function GoogleMapView() {
  const handleMapError = (error) => {
    console.error('MapView Error:', error);
  };

  return (
    <View style={{marginTop:20}}>
      <MapView
      style={{
        width:Dimensions.get('screen').width*0.89,
        height:Dimensions.get('screen').height*0.23,
        borderRadius:20
      }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      onError={handleMapError} // Add error handling
      >

      </MapView>
    </View>
  )
}