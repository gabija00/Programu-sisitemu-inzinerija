import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground,Dimensions,Pressable } from 'react-native';
import CountDown from 'react-native-countdown-component';

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };

     export const OptionsPage1 = ({ navigation, route}) => {
      const name = route.params.name;
          return (
            <ScreenContainer>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
            <Pressable onPress={() => { navigation.navigate("ProfilePage", {name}) }}>
            <Text style= {styles.headerProfile}> {route.params.name} </Text>
            </Pressable>

             <Text style={styles.header2}>Choose</Text>
            <View style={styles.button1}>
            <Button title= "Topics" onPress= {() => navigation.push("OptionsPage2Topics", {name})} color= "#c717fc"/>
            <View style={styles.button1}>
            <Button title= "General" onPress= {() => navigation.push("OptionsPage2General", {name})} color= "#c717fc"/></View>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            </ScreenContainer>
          );
     }

   export const OptionsPage2General = ({ navigation, route}) => {
    const name = route.params.name;
        return (
          <ScreenContainer>
          <ImageBackground source={image} style={styles.image}></ImageBackground>
          <Pressable onPress={() => { navigation.navigate("ProfilePage", {name}) }}>
          <Text style= {styles.headerProfile}> {route.params.name} </Text>
          </Pressable>

          <View style={styles.button3general} >

          <Button title= "Easy" onPress= {() => { navigation.navigate("GeneralEasy") } } color= "#c717fc"/>
          </View>
           <View style={styles.button3general} >
          <Button title= "Medium" onPress= {() => navigation.navigate("GeneralMedium")} color= "#c717fc"/>
          </View>
           <View style={styles.button3general} >
          <Button title= "Hard" onPress= {() => navigation.navigate("GeneralHard")} color= "#c717fc"/>
          </View>
           <View style={styles.button2} >
          <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
          </ScreenContainer>
        );
   }
   export const OptionsPage2Topics = ({ navigation, route}) => {
    const name = route.params.name;
           return (
             <ScreenContainer>
             <ImageBackground source={image} style={styles.image}></ImageBackground>
             <Pressable onPress={() => { navigation.navigate("ProfilePage", {name}) }}>
             <Text style= {styles.headerProfile}> {route.params.name} </Text>
             </Pressable>

             <Text style={styles.header2}>Pasirinkite</Text>

             <View style={styles.button3topics} >
             <Button title= "Math" onPress= {() => { navigation.navigate("TopicsMath") } } color= "#c717fc"/>
             </View>
             <View style={styles.button3topics} >
             <Button title= "History" onPress= {() => navigation.navigate("TopicsHistory")} color= "#c717fc"/>
             </View>
             <View style={styles.button3topics} >
             <Button title= "Biology" onPress= {() => navigation.navigate("TopicsBiology")} color= "#c717fc"/>
             </View>
             <View style={styles.button3topics} >
             <Button title= "Language" onPress= {() => navigation.navigate("TopicsLanguage")} color= "#c717fc"/>
             </View>
             <View style={styles.button3topics} >
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
     button3topics: {

      width:150,
      top: 35,
      alignSelf:"center",
      margin:10,
    },
     button3general: {

      width:150,
      top: 170,
      alignSelf:"center",
      margin:10,
    },
   });


