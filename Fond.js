import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View ,ImageBackground} from 'react-native';


export default class Fond extends React.Component {
  render(){
    return (
      <View style={styles.cover}>
      <ImageBackground source={require('./assets/bus.jpg')} style={styles.background}>

      <Image style={styles.image} source={require('./assets/senbank.png')}/>

      <View style={styles.body}>

      <TouchableOpacity style={styles.connexion}>
      <Text style={styles.text}>SE CONNECTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connexion}>
      <Text style={styles.text}>CRÉER UN COMPTE</Text>
      </TouchableOpacity>

      </View>

      </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background : {
    width : '100%',
    height : '100%',
    alignItems : 'center',
    justifyContent : 'space-between'
  },

  image : {
    width : 200,
    height : 200,
    margin : 70,
  },
  connexion : {
    height : 40,
    borderRadius : 25,
    backgroundColor : 'white',
    margin : 20,
    alignItems : 'center',
    backgroundColor : "#003366",
  },
  body :
  {
    flex : 2,
    width : '100%',
    marginTop : 100,
  },
  text : {
    fontWeight : 'bold',
    padding : 10,
    color : 'white'
  }
});
