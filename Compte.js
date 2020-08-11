import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//recuperer les comptes du client et leurs soldes

export default function Compte (){

    return (
        <View style={styles.container}>

          <View style={styles.compte}>

            <View style={styles.left}>
            <Text style={styles.text1}>Compte</Text>
            <Text style={styles.text2}>12345678</Text>
            </View>

            <View>
            <Text style={styles.text1}>Solde courant</Text>
            <Text style={styles.text2}>1.000.000 XOF</Text>
            </View>

          </View>

        </View>
    );

}


const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  compte : {
    margin : 25,
    backgroundColor : 'white',
    shadowColor: "#77B5FE",
    shadowOffset: {
    	width: 5,
    	height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 10,
    borderRadius : 10,
    padding : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  left :
  {
    width : '50%',
    borderRightWidth : 1,
    borderColor : '#1560BD',
  },
  text1 : {
    fontSize : 20,
    color : '#22427C',
  },
  text2 :
  {
    color : '#5472AE',
    fontWeight : 'bold',
  },

  ajout : {
    backgroundColor : 'white',
    width : 80,
    height : 80,
    borderRadius : 50,
    shadowColor: "#77B5FE",
    shadowOffset: {
    	width: 5,
    	height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 10,
    alignItems : 'center',
    alignSelf : 'flex-end',
    margin : 20,
  }
});
