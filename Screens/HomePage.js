import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect} from 'react';
import {Overlay, SafeAreaView, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import CountDown from 'react-native-countdown-component';

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };
difficultyLevel = 0;//sitas bus reikalingas skaiciuojant

  export const Register = ({ navigation} ) => {

    const [name, setName] = useState('');
    const checkTextInput = () => {
      //Check for the Name TextInput
      if (!name.trim()) {
        alert('Please Enter Name');
        return;
      }
      
      //Checked Successfully
      //Do whatever you want
      //navigation.navigate("HomePage", {name});
      //alert('Success');
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
        
        {/* Nusiunčia vardą į homepage ir nueina į jį */}
        <Button title="Next" onPress= {() => { checkTextInput(), navigation.navigate("HomePage", {name})} } color= "#c717fc"/>
        </View>
        
      </ScreenContainer>
      </View>
    );
  }

  // jei i kitus page'us noresit paduot varda, tai route irasykit prie navigation ir tada naudokit kaip  route.params.name
  export function HomePage  ({ navigation, route})  {
    const name = route.params.name;
    
    return (
      <ScreenContainer>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Text style= {styles.header1}> {route.params.name}</Text>

      <View style={styles.button}>
      <Button title= "Play" onPress= {() => navigation.push("OptionsPage1")} color= "#c717fc"/>
      <View style={styles.button1}>
      <Button title= "Settings" onPress= {() => navigation.push("SettingsPage")} color= "#c717fc"/>
      </View>
      <Button title="Profile" onPress= {() => { navigation.navigate("ProfilePage", {name}) } } color= "#c717fc"/>
      </View>
      </ScreenContainer>
    );
  }


    export const ProfilePage = ({ navigation, route}) => {
       return (
         <ScreenContainer>
                <ImageBackground source={image} style={styles.image}></ImageBackground>

                <Text style= {styles.headerProfile2}> {route.params.name}</Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(matematika): </Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(istorija): </Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(biologija): </Text>
                <Text style= {styles.headerTextResults}>Geriausias rezultatas(kalbos): </Text>
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