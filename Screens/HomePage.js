import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground,Dimensions,Pressable } from 'react-native';

import {pp} from './GeneralPages';
import {topicsP, math, history, biology, language} from './TopicsPages';
var count = 0;
var mma = 0;
var hhis = 0;
var bbio = 0;
var llan = 0;

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };

 
  export const Register = ({ navigation} ) => {
    
    const [name, setName] = useState('');
    const checkTextInput = () => {
      //Check for the Name TextInput
      
      if (!name.trim()) {
        alert('Please Enter Name', 
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
        );
        return;
      }
      else
      {
        navigation.navigate("HomePage", {name});
      }
    };
    

    const nameInputHandler = (enteredText) => {
      setName(enteredText);
    };
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    };
    
    return (
      <View >
      <ScreenContainer>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Text style= {styles.header}>Prisijunkite</Text>
      <TextInput
      placeholder="Name"
      style={styles.input} 
      underlineColorAndroid={'transparent'} 
      onChangeText={nameInputHandler}
          
      />
      <View style={styles.button1}>
        <Button title="Next" onPress= {() => { checkTextInput() } } color= "#c717fc"/>
        </View>
      </ScreenContainer>
      </View>
    );
  }

  export function HomePage  ({ navigation, route})  {
    const name = route.params.name;
    
    return (
      <ScreenContainer>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Pressable onPress={() => { navigation.navigate("ProfilePage", {name}) }}>
      <Text style= {styles.headerProfile}> {route.params.name} </Text>
      </Pressable>

      <View style={styles.button}>
      <Button title= "Play" onPress= {() => navigation.push("OptionsPage1", {name})} color= "#c717fc"/>
      <View style={styles.button1}>
      <Button title= "Settings" onPress= {() => navigation.push("SettingsPage")} color= "#c717fc"/>
      </View>
      </View>
      </ScreenContainer>
    );
  }


    export const ProfilePage =  ({ navigation, route}) => {
      
     
       var temp = count + topicsP.get_sk() + pp.get_sk();
       pp.set_sk(0);
       topicsP.set_sk(0); 

       var mm = mma + math.get_sk();
       math.set_sk(0);
       mma = mm;

       var hh = hhis + history.get_sk();
       history.set_sk(0);
       hhis = hh;

       var bb = bbio + biology.get_sk();
       biology.set_sk(0);
       bbio = bb;

       var ll = llan + language.get_sk();
       language.set_sk(0);
       llan = ll;
       
       
       count =temp;
       
        
       return (
         <ScreenContainer>
                <ImageBackground source={image} style={styles.image}></ImageBackground>

                <Text style= {styles.headerProfile}> {route.params.name}</Text>
                <Text style= {styles.headerTextResults}>All points: {temp}</Text>                
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(matematika): {mm}</Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(istorija): {hh}</Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(biologija): {bb}</Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(kalbos): {ll}</Text>
                <View style={styles.button1}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                </View>
         </ScreenContainer>
       );
   }

   export const SettingsPage = ({ navigation}) => {
                    return (
                      <ScreenContainer>
                      <ImageBackground source={image} style={styles.image}></ImageBackground>
                      <View style={styles.button1}>
                      <Button title="Go back" onPress={() => navigation.goBack()} />
                      </View>
                      </ScreenContainer>
                    );
   }
   





  const styles = StyleSheet.create({
    header:{
      fontSize:30,
      alignSelf:'center',
      top: 0,
      margin:100,
      color:'#fff'
    },
     headerProfile:{
      fontSize:20,
      textAlign: 'center',
      alignSelf: 'flex-start',
      color: 'white',
      width: 150,
      height: 50,
      margin:20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
      borderColor: 'black',
      backgroundColor: 'orange',
    },
    headerProfile2:{
      fontSize:20,
      textAlign: 'center',
      color: 'white',
      width: 150,
      height: 50,
      margin:20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    headerTextResults:{
      fontSize:18,
      alignSelf:'flex-start',
      top: 0,
      margin:10,
      color:'#fff'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      position:"absolute",
      zIndex: -1,

    },
    button: {
      width:150,
      alignSelf:"center",
      margin:200,


    },
    button1: {
      width:150,
      alignSelf:"center",
      margin:50,
    },
    input: {
      width:300,
      height:40,
      borderColor:'#000',
      borderWidth:1,
      padding:1,
      backgroundColor:'#fff',
      alignSelf:'center',
      textAlign:'center',
      marginBottom:10,
    },
  });