import React from 'react';
import { Button,View,Text,Image, TouchableOpacity, } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import { styles } from './styles';
import{Entypo} from '@expo/vector-icons';
import WrImg from '../../assets/caros.png';
import { useNavigation } from '@react-navigation/native';


export function Maps() {

  const navigation = useNavigation();
    function Cross(){
      navigation.navigate('home');
    }
  return (
    <View style={styles.container}>


      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.896080478061968,
          longitude: -43.750934979254644,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }} 
      />
      <Marker
      identifier="origin"
      coordinate={{
        latitude: -22.896080478061968,
        longitude: -43.750934979254644,
      }}

      />
      <MapView/>
      <View style={styles.card}>
      
       <View style={styles.croos}>
       <Text style={styles.title}>Fortuner GR</Text>

       <TouchableOpacity onPress={Cross}>
       <Entypo
       name='cross' size={25} color="#fff"
       style={{marginTop:30, marginLeft:150}}
       />
       </TouchableOpacity>
       </View>

         
          
        <View style={styles.icon}>
        <Entypo
        name='direction' size={25} color="#FFF"
        style={{marginTop:-40}}
        />
        <Text style={styles.icons}>780km</Text>

        <Entypo
        name='clipboard' size={25} color="#FFF"
         style={{marginLeft:25,marginTop:-40}}
        />
        <Text style={styles.icons}>50Lts</Text>
        
        </View>
      </View>

     
      <View style={styles.cardx}>
        <Image
        source={WrImg}
        style={styles.carro}
        />
      <Text style={{margin:20, marginTop:-60,
      fontSize:25,
      }}>Features</Text>

      <View style={styles.feat}>
        <Text>Diesel</Text>
        
        <Text>Acceleration</Text>
        <Text>Cool Seat</Text>
      </View>
      </View>
      <View style={styles.cardxt}>
        <Text style={styles.footer}>$45,00</Text>
        <Text style={styles.day}>/day</Text>

       <TouchableOpacity style={styles.button}>
        <Text style={styles.now}>Book Now</Text>
       </TouchableOpacity>
      </View>
    </View>


  );
}