import { StyleSheet } from 'react-native';
import { Inter_400Regular } from '@expo-google-fonts/inter';


export const styles = StyleSheet.create({
  container: {
    width:380,
    height:210,
    backgroundColor:'#282931',
    marginLeft:20,
    borderRadius:20,
    
  },
  car:{
    fontSize:15,
    color:'#fff',
    margin:20,
  },
  more:{
    flex:1,
    flexDirection:'row',
    marginVertical:-25,
  },
  cross:{
    fontSize:20,
    fontWeight:'700',
    margin:20,
    color:'#fff'
    
  },
  bola:{
    fontSize:35,
    color:'#fff',
    marginVertical:-25,
    flex:1,
    marginLeft:130,
  },
  title:{
    marginVertical:10,
    margin:20,
    fontSize:15,
    color:'#fff'
  },
  lit:{
   bottom:-10,
   color:'#fff'
  },
  linha:{
    width: 300,
    height:1,
    backgroundColor:"#fff",
    marginTop:38,
    marginLeft:-70,
  },
  tobbom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:35
  },

  tobm:{
    
    fontSize:20,
    marginHorizontal:10,
    marginLeft:10,
    fontFamily:'Inter_400Regular',
    fontWeight:'500',
    color:'#fff'
  },
  icon:{
    
  },
});