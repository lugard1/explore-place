// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import TabNavigation from './App/Navigations/TabNavigation';
// import React, { useEffect, useState } from 'react';
// import * as Location from 'expo-location';
// import { useFonts } from 'expo-font';
// import { UserLocationContext } from './App/Context/UserLocationContext';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [fontsLoaded, fontError] = useFonts({
//     'Raleway-Regular': require('./assets/Fonts/Raleway-Regular.ttf'),
//     'Raleway-Bold': require('./assets/Fonts/Raleway-Bold.ttf')
//   });

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   if (!fontsLoaded) {
//     // Font loading is in progress, return a loading indicator or null
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <UserLocationContext.Provider value={{ location, setLocation }}>
//         <NavigationContainer>
//           <TabNavigation />
//         </NavigationContainer>
//       </UserLocationContext.Provider>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';
import { UserLocationContext } from './App/Context/UserLocationContext';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded, fontError] = useFonts({
    'Raleway-Regular': require('./assets/Fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('./assets/Fonts/Raleway-Bold.ttf')
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!fontsLoaded) {
    // Handle font loading error
    console.error('Fonts not loaded:', fontError);
    return null; // Render nothing until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
