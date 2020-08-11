import React, { Component} from 'react';
import {Text,TouchableOpacity,View,TextInput,StyleSheet,Alert,Picker,ScrollView} from 'react-native';

//recuperer le compte choisi
// Verifier le montant adequat
//enregistrer la transaction dans lhistorique
//retirer le montant du solde


export default class Seneau extends React.Component {

      state = {
        visible : 0,
      }

      changevis=()=>{
        this.setState({visible : 1});
      }

  render(){
    return(
      <ScrollView>

      <View style={styles.banner}>
      <Text style={styles.text}>choisir un compte</Text>
              <Picker onValueChange = {this.changevis} style={styles.text}>
                 <Picker.Item label = "Compte 1" value = "1" />
                 <Picker.Item label = "Compte 2" value = "2" />
                 <Picker.Item label = "Compte 3" value = "3" />
              </Picker>

      </View>


        <View style={{opacity : this.state.visible,alignSelf : 'stretch',alignItems : 'center'}}>
        <TextInput placeholder="Numero de reference client" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TextInput placeholder="Saisir le montant" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TextInput placeholder="Saisir le nom" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TextInput placeholder="Saisir le numero de telephone" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TouchableOpacity style={styles.bouton}>
        <Text style={{color : "white"}}>Payer</Text>
        </TouchableOpacity>
        </View>

      </ScrollView>

    );
  }

}

const styles=StyleSheet.create({

  banner : {
    width : 'auto',
    alignSelf : 'stretch',
    backgroundColor : '#22427C',
    margin : 25,
  },
  input : {
    height : 50,
    margin : 15,
    borderWidth : 1,
    borderColor : '#22427C',
    alignSelf : 'stretch',
  },
  bouton : {
    height : 50,
    width : 150,
    backgroundColor : '#22427C',
    marginTop : 50,
    margin : 25,
    alignItems : 'center',
    paddingTop : 15,
    bottom : 20,
    borderRadius : 5,
  },
  text : {
    color : 'white',
  }
})
