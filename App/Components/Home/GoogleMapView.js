import { View, Text, Dimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, mapRegion} from 'react-native-maps';
import React, { useState, useContext, useEffect } from 'react';
import { UserLocationContext } from '../../Context/UserLocationContext';
// import * as Font from 'expo-font';


export default function GoogleMapView() {
  // const handleMapError = (error) => {
  //   console.error('MapView Error:', error);
  // };

  const [mapRegion, setMapRegion] = useState([])
  const {location, setLocation} = useContext(UserLocationContext);
  useEffect(()=>{
    if(location)
    {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421
      })
    }
  },[])


  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 600, fontFamily: 'Raleway-Bold' }}>
        Top Near By Places
      </Text>
      <View style={{borderRadius: 20, overflow: 'hidden'}}>
        <MapView
          style={{
            width: Dimensions.get('screen').width * 0.89,
            height: Dimensions.get('screen').height * 0.23,
          
          }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
          <Marker
          title="You"
          coordinate={mapRegion}
          />
        </MapView>
      </View>
     
    </View>
  )
}