import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function CardInfor() {

  const navigation = useNavigation();
    function Start(){
      navigation.navigate('maps');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.car}>More Cars</Text>
      <View style={styles.more}>
        <Text style={styles.cross}>Corolla Cross</Text>
        <Text style={styles.bola}>...</Text>
      </View>
      <View style={{ flex: 1, marginTop: -10, flexDirection: 'row' }} >
        <Text style={styles.title}>4km</Text>
        <Text style={styles.lit}>50L</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.tobbom}>
        <Text style={styles.tobm}>Ionic</Text>
        <TouchableOpacity onPress={Start}>
        <Ionicons
         name='arrow-forward-circle'
         size={35} color="#fff"
         style={styles.icon}

        />
        </TouchableOpacity>
      </View>
    </View>
  );
}