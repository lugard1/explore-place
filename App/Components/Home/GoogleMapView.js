import { View, Text, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE, mapRegion} from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function GoogleMapView() {
  // const handleMapError = (error) => {
  //   console.error('MapView Error:', error);
  // };

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421
  })
  const {location, setLocation} = useContext(UserLocationContext)
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
      region={mapRegion}
      // onError={handleMapError} // Add error handling
      >

      </MapView>
    </View>
  )
}