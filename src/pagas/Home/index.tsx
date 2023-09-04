import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import uberImg from '../../assets/carro.png';
import { styles } from './styles';
import { Text } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {

 

  return (
    <View style={styles.container}>
        <Image
        source={uberImg}/>
        <Text style={styles.title}>
        Premium cars.{'\n'}
        Enjoy the luxury
        </Text>
        <View style={styles.use}>
            <Text style={styles.person}>
            Premium and prestige car daily rental.{'\n'}
            Experience the thrill at a lower price
            </Text>

           <Button/>
        </View>
    </View>
  );
}