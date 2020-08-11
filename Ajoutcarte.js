import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View,TextInput} from 'react-native';

//enregistrer la carte dans la bdd ainsi que son solde

export default class AjoutCarte extends React.Component{

  render(){
    return (
      <View style={styles.container}>
      <TextInput placeholder="Numero de carte" style={styles.input} placeholderTextColor="#B0C4DE"/>

      <TextInput placeholder="Date d'expiration" style={styles.input} placeholderTextColor="#B0C4DE"/>

      <TextInput placeholder="CVV" style={styles.input} placeholderTextColor="#B0C4DE"/>

      <TouchableOpacity style={styles.bouton}>
      <Text style={styles.text}>Ajouter</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles=StyleSheet.create({

  input : {
    height : 50,
    margin : 50,
    borderBottomWidth : 1,
    borderColor : '#22427C'
  },
  bouton : {
    backgroundColor : '#22427C',
    height : 50,
    margin : 25,
    alignItems : 'center',
    padding : 10,
  },
  text : {
    color : 'white',
    fontSize : 20,
  }

})
