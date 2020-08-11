import React, { Component} from 'react';
import {Text,TouchableOpacity,View,TextInput,StyleSheet,Alert,Picker,ScrollView,Modal} from 'react-native';

//recuperer le compte choisi
// Verifier le montant adequat
//enregistrer la transaction dans lhistorique
//retirer le montant du solde


export default class Virement extends React.Component {

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

      <View style={styles.banner}>
      <Text style={styles.text}>choisir une banque</Text>
      <Picker style={styles.text}>
                 <Picker.Item label = "SENBANK" value = "1" />
                 <Picker.Item label = "Banque Islamique" value = "2" />
                 <Picker.Item label = "Banque Atlantique" value = "4" />
                 <Picker.Item label = "ECOBANK" value = "5" />
                 <Picker.Item label = "UBA" value = "6" />
                 <Picker.Item label = "Banque de Dakar" value = "7" />
              </Picker>
              <Text style = {styles.text}>{this.state.compte}</Text>

      </View>


        <TextInput placeholder="Numero du compte bancaire" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TextInput placeholder="Saisir le montant" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TextInput placeholder="Saisir le nom du receveur" style={styles.input} placeholderTextColor="#B0C4DE"/>

        <TouchableOpacity style={styles.bouton} onPress={()=>{this.setState({ModalVisible : true})}}>
        <Text style={{color : "white"}}>Envoyer</Text>
        </TouchableOpacity>
        </View>

        <Modal
          visible={this.state.ModalVisible}
          animationType="fade"
          transparent = {true}
          >

          <View style={styles.modal}>
            <Text>{"Vous voulez effectuer un transfert de x vers le compte y \n \nEntrez votre code pour confirmer \n"}</Text>
            <TextInput placeholder="Code" style={styles.input}
            onChangeText = {text => this.setState({ code: text })}
            />
            <TouchableOpacity style={styles.bouton} onPress={()=>{this.setState({ModalVisible : false})}}>
            <Text style={{color : 'white'}}>valider</Text>
            </TouchableOpacity>

          </View>
        </Modal>

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
  },
  modal : {
    width : 300,
    height : 400,
    alignItems : 'center',
    alignSelf : 'center',
    backgroundColor : 'white',
    top : 150,
    padding : 25,
  },
})
