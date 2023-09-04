import { View,StyleSheet,Text,Image } from "react-native";

import{Feather} from "@expo/vector-icons";


import carImg from '../assets/image.png';

import alaImg from '../assets/alla.png';
import { CardInfor } from "../components/CardInfor";
export function User(){

  return(
    <View  style={styles.container}>
     <View style={{flexDirection:'row', justifyContent:'space-between'
     ,marginTop:30,}}>

      <Feather
          name="user"
          size={30}color="#000"
          style={{marginHorizontal:30}}
          
          />
        
      <Feather
          name="info"
          size={30}color="#000"
          style={{marginHorizontal:50,}}
          />
       
       
     </View>
      <View style={{backgroundColor:'#fcf5f5', width:370,height:220,
      marginTop:1,borderRadius:3,margin:18,
    }}>

      <Text style={{marginTop:10, marginLeft:25,color:'#787878'}}>
        NEAREST CAR
      </Text>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image
          source={carImg}
          style={{width:250, height:90}}
          />
      </View>
      <View>
        <Text style={{fontSize:25, fontWeight:'bold'}}>
        Fortuner GR
        </Text>
      </View>

      <View style={{flexDirection:'row',}}>
        <Text style={{}}>800km</Text>
        <Text style={{marginLeft:25}}>50km</Text>
        <Text style={{marginHorizontal:140}}>$45,00km</Text>
      </View>
      </View>
      <View style={{width:167, height:130, backgroundColor:'#f5fcfc',margin:20, flexDirection:'row'}}>
        <Image
         source={alaImg}
         style={{width:60, height:60,margin:25,borderRadius:40}}
         
        />
        <View style={{marginTop:90, }}>
        <Text style={{padding:10,marginHorizontal:-80}}>Alaelcio</Text>
        </View>
        <View style={{}}>
         <Feather
          name="map" size={50}
          style={{marginLeft:110, marginTop:35}}
         />
      </View>
      </View>

      
      <CardInfor/>
    </View>
  )
}

   
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
   
     

  