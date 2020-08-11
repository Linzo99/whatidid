import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View} from 'react-native';


  export default function Reception(){

    return(
        <View style={styles.container}>
        <Text style={styles.text1}>Mardi 04/08/2020</Text>
        <Text style={styles.text2}>INTITULÉ</Text>
        <Text style={styles.text3}>{'Vous avez reçu 1.000.000 XOF du 772820171. \nConsultez votre compte pour connaître votre nouveau solde.'}</Text>
        </View>
    );
  }

  const styles=StyleSheet.create({
    container : {
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
      },
      text1 : {
        fontWeight : 'bold',
        fontSize : 15,
        alignSelf : 'center',
        color : '#5472AE'
      },
      text2 : {
        color : '#22427C',
        fontWeight : 'bold',
        textDecorationLine: 'underline',

      },
      text3 : {
        color : '#22427C',
      }
  })
