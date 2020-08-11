import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View} from 'react-native';
import AjoutCarte from './Ajoutcarte';
import { NavigationContainer } from '@react-navigation/native';

//afficher toutes les cartes et recuperer leurs soldes

export default function Carte ({navigation : {navigate}}){

    return (
        <View style={styles.container}>

          <View style={styles.carte}>

          <Image style={styles.image} source={require('./assets/puce.png')}/>

            <Text style={styles.text}>1234 5678 1234 5678 </Text>

            <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
              <View>
              <Text style={styles.text2}>1.000.000 XOF</Text>
              <Text style={styles.text1}>Solde disponible</Text>
              </View>
              <View>
              <Text style={styles.text2}>10/21</Text>
              <Text style={styles.text1}>exp. date</Text>
              </View>
            </View>

          </View>

          <TouchableOpacity style={styles.ajout} onPress={()=>navigate('AjoutCarte')}>
          <Text style={{color : '#5472AE',fontSize : 50}}>+</Text>
          </TouchableOpacity>

        </View>
    );

}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'space-between'
  },
  carte : {
    margin : 25,
    backgroundColor : '#DAA520',
    shadowColor: "black",
    shadowOffset: {
    	width: 10,
    	height: 10,
    },
    shadowOpacity: 0.8,
    elevation: 20,
    borderRadius : 20,
    padding : 20,
  },
  recharge : {
    width : 'auto',
    height : 'auto',
    marginTop : 10,
  },
  image : {
    width : 50,
    height : 50,
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
  },
  text : {
    alignSelf : 'center',
    fontSize : 20,
    marginBottom : 15,
    color : '#22427C'
  },
  text1 :
  {
    fontSize : 10,
    fontStyle : 'italic',
    color : 'white',
  },
  text2 :
  {
    fontSize : 15,
    color : '#22427C'
  }
});
