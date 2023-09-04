import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity,StyleSheet,Text} from 'react-native';


export function Button(){

    const navigation = useNavigation();
    function handleStart(){
      navigation.navigate('user');
    }
    return(
        <TouchableOpacity style={Styles.button}
         onPress={handleStart}
        >
            <Text style={{fontSize:20, color:"#000"}}>Let's Go</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({

    button:{
        width:319,
        height:56,
        borderRadius:50,
        backgroundColor:"#fff",
        bottom:-60,
        alignItems:'center',
        justifyContent:'center'
       

      



    }
})