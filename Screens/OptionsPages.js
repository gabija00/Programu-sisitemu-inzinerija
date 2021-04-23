import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground,Dimensions } from 'react-native';
import CountDown from 'react-native-countdown-component';

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };

     export const OptionsPage1 = ({ navigation}) => {
          return (
            <ScreenContainer>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
             <Text style={styles.header2}>Choose</Text>
            <View style={styles.button1}>
            <Button title= "Topics" onPress= {() => navigation.push("OptionsPage2Topics")} color= "#c717fc"/>
            <View style={styles.button1}>
            <Button title= "General" onPress= {() => navigation.push("OptionsPage2General")} color= "#c717fc"/></View>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            </ScreenContainer>
          );
     }

   export const OptionsPage2General = ({ navigation}) => {
        return (
          <ScreenContainer>
          <ImageBackground source={image} style={styles.image}></ImageBackground>

          <View style={styles.button3} >

          <Button title= "Easy" onPress= {() => { navigation.navigate("GeneralEasy", {level:4}) } } color= "#c717fc"/>
          </View>
           <View style={styles.button3} >
          <Button title= "Medium" onPress= {() => navigation.navigate("GeneralMedium")} color= "#c717fc"/>
          </View>
           <View style={styles.button3} >
          <Button title= "Hard" onPress= {() => navigation.navigate("GeneralHard")} color= "#c717fc"/>
          </View>
           <View style={styles.button2} >
          <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
          </ScreenContainer>
        );
   }
   export const OptionsPage2Topics = ({ navigation}) => {
           return (
             <ScreenContainer>
             <ImageBackground source={image} style={styles.image}></ImageBackground>
             <Text style={styles.header2}>Pasirinkite</Text>
             <View style={styles.button1}>
             <Button title= "Math"/>
             <Button title= "History"/>
             <Button title= "Biology"/>
             <Button title= "Languages"/>
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
      header1:{
       fontSize:20,
       alignSelf:'center',
       right:120,
       margin:10,
       color:'#c717fc',
       backgroundColor:"#fff"
     },
     header2:{
     fontSize:30,
     alignSelf:'center',
     top: 0,
     margin:50,
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
       margin:150,


     },
     button2: {
            width:150,
            top: 250,
            alignSelf:"center",
            margin:10,
          },
      button3: {

                      width:150,
                      top: 150,
                      alignSelf:"center",
                      margin:10,
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


