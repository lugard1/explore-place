// import { View, Text } from 'react-native';
// import React, { useEffect } from 'react';
// import Header from '../Components/Home/Header';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import GoogleMapView from '../Components/Home/GoogleMapView';
// import CategoryList from '../Components/Home/CategoryList';
// import GlobalApi from '../Services/GlobalApi';

// export default function Home() {
//   useEffect(()=>{
//     GetNearBySearchPlace();
//   },[])

//   const GetNearBySearchPlace = ()=>{
//     GlobalApi.nearByPlace.then(resp=>{
//       console.log(resp.data)
//     })
//   }

//   return (
//     <SafeAreaView>
//       <View style={{padding:20}}>
//         <Header />
//         <GoogleMapView />
//         <CategoryList />
//       </View>
//     </SafeAreaView>
//   )
// }

import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Home/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import PlaceList from '../Components/Home/PlaceList';
import GlobalApi from '../Services/GlobalApi';

export default function Home() {

  const [placelist, setPlaceList] = useState([])
  useEffect(() => {
    GetNearBySearchPlace();
  }, [])

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace().then(resp => { // Invoke the function by adding ()
      // console.log(resp.data.results);
      setPlaceList(resp.data.results)
    })
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Header />
        <GoogleMapView />
        <CategoryList />
        <PlaceList />
      </View>
    </SafeAreaView>
  )
}