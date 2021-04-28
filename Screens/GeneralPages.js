import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect, Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground,Dimensions, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };



const questions = ['2*2?', '5+5?', '9-7?', '22+27?', 'sqrt9?', 'sqrt36?', 'sqrt25?'];

export  class GeneralEasy extends Component{

constructor(){
    super();
    this.state = { textValue: questions[questions.length], count: 0 }
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton() {
  this.setState({
    count: this.state.count + 1 //galima prideti taskus sitaip
  });
  this.setState({
      textValue: questions[this.state.count%questions.length]//galima keisti klausimus sitaip
  })
  
}
onFinish = (count) => {
  this.props.navigation.navigate('OptionsPage1');
  Alert.alert(
    "Time is over !",
    "Points: "+count.toString(),
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}


render(){
  
    return(
    <ScreenContainer>
   <ImageBackground source={image} style={styles.image}></ImageBackground>
   <Text style={styles.Points}> Points </Text>
   <Text style={styles.Points}> {this.state.count} </Text>
   <CountDown
                          style = {styles.timer}

                          until={60}
                          timeToShow={['M', 'S']}
                          //formate to show
                          onFinish={() =>{this.onFinish(this.state.count)}}

                          //onPress={() => alert('hello')}
                          //on Press calls
                          size={20}

   />

 <View style={{paddingTop: 20}}>
  <Text style={{color: 'black',fontSize:20, margin: 20, alignSelf:'center'}}> {this.state.textValue} </Text>
  <TextInput placeholder="Answer" style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
 </View>

   </ScreenContainer>
   );
 }

}
export  class GeneralMedium extends Component{

  constructor(){
    super();
    this.state = { textValue: questions[questions.length], count: 0 }
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton() {
  this.setState({
    count: this.state.count + 1 //galima prideti taskus sitaip
  });
  this.setState({
      textValue: questions[this.state.count%questions.length]//galima keisti klausimus sitaip
  })
  
}
onFinish = (count) => {
  this.props.navigation.navigate('OptionsPage1');
  Alert.alert(
    "Time is over !",
    "Points: "+count.toString(),
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}


render(){
  
    return(
    <ScreenContainer>
   <ImageBackground source={image} style={styles.image}></ImageBackground>
   <Text style={styles.Points}> Points </Text>
   <Text style={styles.Points}> {this.state.count} </Text>
   <CountDown
                          style = {styles.timer}

                          until={45}
                          timeToShow={['M', 'S']}
                          //formate to show
                          onFinish={() =>{this.onFinish(this.state.count)}}

                          //onPress={() => alert('hello')}
                          //on Press calls
                          size={20}

   />

 <View style={{paddingTop: 20}}>
  <Text style={{color: 'black',fontSize:20, margin: 20, alignSelf:'center'}}> {this.state.textValue} </Text>
  <TextInput placeholder="Answer" style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
 </View>

   </ScreenContainer>
   );
 }
}
export  class GeneralHard extends Component{

  constructor(){
    super();
    this.state = { textValue: questions[questions.length], count: 0 }
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton() {
  this.setState({
    count: this.state.count + 1 //galima prideti taskus sitaip
  });
  this.setState({
      textValue: questions[this.state.count%questions.length]//galima keisti klausimus sitaip
  })
  
}
onFinish = (count) => {
  this.props.navigation.navigate('OptionsPage1');
  Alert.alert(
    "Time is over !",
    "Points: "+count.toString(),
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}


render(){
  
    return(
    <ScreenContainer>
   <ImageBackground source={image} style={styles.image}></ImageBackground>
   <Text style={styles.Points}> Points </Text>
   <Text style={styles.Points}> {this.state.count} </Text>
   <CountDown
                          style = {styles.timer}

                          until={30}
                          timeToShow={['M', 'S']}
                          //formate to show
                          onFinish={() =>{this.onFinish(this.state.count)}}

                          //onPress={() => alert('hello')}
                          //on Press calls
                          size={20}

   />

 <View style={{paddingTop: 20}}>
  <Text style={{color: 'black',fontSize:20, margin: 20, alignSelf:'center'}}> {this.state.textValue} </Text>
  <TextInput placeholder="Answer" style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
 </View>

   </ScreenContainer>
   );
 }

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
    Points:{
      top:20,
      fontSize:25,
      alignSelf:'center',
      margin:10,
      color:'black',
      backgroundColor:"#fff"
    },
    timer:{
        fontSize:20,
        alignSelf:'center',
        top:30,
        margin:40,
        color:'#c717fc'
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
