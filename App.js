import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Drawer from './Routes/Drawer';
import HomeStack from './Routes/HomeStack';
import Home from './screens/Home';

export default function App() {
  const [loaded] = useFonts({
    oswaldSemibold: require('./assets/Fonts/Oswald-SemiBold.ttf'),
  })
  !loaded && console.log('Fonts not loaded');
  
  return (
    loaded &&
      // <Home />
      // <HomeStack />
      <Drawer />
  );
}


