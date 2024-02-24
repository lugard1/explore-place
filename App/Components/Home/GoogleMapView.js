import { View, Text, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE, mapRegion} from 'react-native-maps';
import React from 'react';

export default function GoogleMapView() {
  // const handleMapError = (error) => {
  //   console.error('MapView Error:', error);
  // };

  const [mapRegion, setMapRegion] = UseState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421
  })

  return (
    <View style={{marginTop:20, borderRadius: 8}}>
      <MapView
      style={{
        width:Dimensions.get('screen').width*0.89,
        height:Dimensions.get('screen').height*0.23,
        borderRadius:20
      }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      region={mapRegion}
      // onError={handleMapError} // Add error handling
      >

      </MapView>
    </View>
  )
}