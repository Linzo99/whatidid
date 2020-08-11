import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Image , View } from 'react-native';
import Compte from './Compte';
import Carte from './Carte';
import Facture from './Facture';
import Virement from './Virement';
import Senelec from './Senelec';
import Woyofal from './Woyofal';
import Seneau from './Seneau';
import Fond from './Fond';
import Historique from './Historique';
import Recharge from './Recharge';
import AjoutCarte from './Ajoutcarte';
import Reception from './Reception';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Stack=createStackNavigator();


function Home({navigation : {navigate}}) {
  return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Compte')}>
      <Text style={styles.textcadre}>Compte</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Carte')}>
    <Text style={styles.textcadre}>Carte</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Facture')}>
    <Text style={styles.textcadre}>Facture</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Virement')}>
    <Text style={styles.textcadre}>Virement</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Fond')}>
    <Text style={styles.textcadre}>Accueil</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.cadre} onPress={()=>navigate('Reception')}>
    <Text style={styles.textcadre}>Reception</Text>
    </TouchableOpacity>

    </View>
  );
}

export default function App() {

    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="Home" component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#5472AE',
              height : 200,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle : 'Home',
            headerTitleAlign : 'center'
          }}
          />

        <Stack.Screen name="Compte" component={Compte}
        options={({route,navigation})=>({
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Mes Comptes',
          headerTitleAlign : 'center',
          headerRight : ()=>(
            <TouchableOpacity style={styles.historique} onPress={()=>navigation.navigate('Historique')}>
            <Image style={styles.image} source={require('./assets/historique.png')}/>
            </TouchableOpacity>
          ),
          headerRightContainerStyle : {
            justifyContent : 'flex-end',
          }
        })} />

        <Stack.Screen name="Carte" component={Carte}
        options={({route,navigation})=>({
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Mes Cartes',
          headerTitleAlign : 'center',
          headerRight : ()=>(
            <TouchableOpacity style={styles.historique} onPress={()=>navigation.navigate('Recharge')}>
            <Image style={styles.image} source={require('./assets/recharge.png')}/>
            </TouchableOpacity>
          ),
          headerRightContainerStyle : {
            justifyContent : 'flex-end',
          },
        })}/>

        <Stack.Screen name="Virement" component={Virement}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Virements',
          headerTitleAlign : 'center'
        }}/>

          <Stack.Screen name="Facture" component={Facture}
          options={{
            headerStyle: {
              backgroundColor: '#5472AE',
              height : 200,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle : 'Factures',
            headerTitleAlign : 'center'
          }}/>


        <Stack.Screen name="Seneau" component={Seneau}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Sen\'eau',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Senelec" component={Senelec}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'SENELEC',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Woyofal" component={Woyofal}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'WOYOFAL',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Historique" component={Historique}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'HISTORIQUE',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Recharge" component={Recharge}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'RECHARGE',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="AjoutCarte" component={AjoutCarte}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Ajouter une Carte Bancaire',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Reception" component={Reception}
        options={{
          headerStyle: {
            backgroundColor: '#5472AE',
            height : 200,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle : 'Reception',
          headerTitleAlign : 'center'
        }}/>

        <Stack.Screen name="Fond" component={Fond}
        options={{
          headerShown : false,
        }}/>


      </Stack.Navigator>
    </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    alignSelf : 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap : 'wrap'
  },
  cadre :
  {
    width : 150,
    height : 150,
    borderRadius : 75,
    backgroundColor : '#5472AE',
    margin : 25,
    alignItems : 'center',
    shadowColor: "#000000",
    shadowOffset: {
    	width: 5,
    	height: 5,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
  textcadre : {
    fontSize : 20,
    paddingTop : 65,
  },
  historique : {
    width : 'auto',
    height : 'auto',
  },
  image : {
    width : 90,
    height : 90,
  },
});
