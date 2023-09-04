import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  map:{
   width:'100%',
   height:270,
  },
  card:{
    width:400,
    height:240,
    backgroundColor:'#282931',
    marginLeft:3,
    marginHorizontal:-1,
    marginTop:5,
    borderRadius:25,
  },
  title:{
    fontSize:24,
    fontWeight:'500',
    marginTop:25,
    margin:20,
    color:"#fff"
  },
  icon:{
    flex:1,
    flexDirection:'row',
    margin:20,
  },
  icons:{
    color:"#fff",
    marginLeft:25,
    marginTop:-40,
  },
  croos:{
    flex:1,
    flexDirection:'row',
    
  },
  cardx:{
    width:380,
    height:150,
    backgroundColor:"#FFF",
    zIndex:999,
    marginLeft:18,
    borderRadius:15,
   
    marginTop:-120
  },
  carro:{
   marginLeft:180,
   marginTop:-35
  },
  feat:{
    width:"100%",
    flex:1,
    flexDirection:'row',
    gap:60,
    marginHorizontal:35
  },
  cardxt:{
    flexDirection:'row',
   flex:1,
    height:45,
    backgroundColor:"#FFF",
    
  },
  footer:{
    fontSize:35,
    marginHorizontal:35
  },
  day:{
    fontSize:15,
    marginTop:15
    
  },

  button:{
    width:120,
    height:50,
    backgroundColor:"#000",
    marginHorizontal:50,
    borderRadius:30,
  },
  now:{
    fontSize:15,
    color:"#FFF",
    textAlign:'center',
    marginTop:12,
  },
  
});