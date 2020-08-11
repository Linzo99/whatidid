import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View } from 'react-native';
import Senelec from './Senelec';
import Woyofal from './Woyofal';
import Seneau from './Seneau';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Stack=createStackNavigator();

export default function Home ({navigation : {navigate}}){

    return (

      <View style={styles.container}>

        <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Senelec')}>
        <Image style={styles.image} source={require('./assets/senelec.jpeg')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Seneau')}>
        <Image style={styles.image} source={require('./assets/seneau.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Woyofal')}>
        <Image style={styles.image} source={require('./assets/woyofal.png')}/>
        </TouchableOpacity>

        </View>
    );
  }

const styles=StyleSheet.create({
  container :
  {
    flexWrap : 'wrap',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    margin : 25,
  },
  image :
  {
    width : 70,
    height : 70,
    borderRadius : 35,
    margin : 15,
  },
  cadre :
  {
    width : 100,
    height : 100,
    borderRadius : 50,
    margin : 25,
    alignItems : 'center',
    shadowColor: "#77B5FE",
    shadowOffset: {
    	width: 5,
    	height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor : 'white'
  },

})
