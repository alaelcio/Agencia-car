
import {useFonts,Inter_400Regular,Inter_500Medium,Inter_700Bold} from "@expo-google-fonts/inter";
import { Home } from './src/pagas/Home';
import { Loader } from "./src/components/Loader";
import { View } from "react-native";
import Routes from "./src/routes";



export default function App() {

  const  [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });
  return (
   
    <View style={{backgroundColor:'#2C2B34', flex:1}}>
      {fontsLoader? <Routes/> : <Loader/>}
    </View>
  );
}

