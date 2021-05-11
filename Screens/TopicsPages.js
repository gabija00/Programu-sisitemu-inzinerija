import 'react-native-gesture-handler';
import { ScreenContainer } from "react-native-screens";
import React ,{useState, useEffect, Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ImageBackground,Dimensions, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';

const image = { uri: "https://i.pinimg.com/originals/83/04/a9/8304a9c7cce7981bf599b8c1d78bda7f.jpg" };



const questionsMath = ['2*2?', '5+5?', '9-7?', '22+27?', 'sqrt9?', 'sqrt36?', 'sqrt25?'];
const answerMath = ['4', '10', '2', '49', '3', '6', '5'];

const questionsHistory = ['Kada vyko Žalgirio mūšis?', 'Kada baigėsi antrasis pasaulinis karas?', 'Kuriais metais vyko Mindaugo karūnavimas?',
 'Kada išleista pirmoji lietuviška knyga?', 'Kada buvo pirmą kartą paminėtas Lietuvos vardas?'];
const answerHistory = ['1410', '1945', '1253', '1547', '1009'];

const questionsBiology = ['Kaip vadinami gyvūnai, kurie ėda tik augalus?', 'Ar driežas yra roplys?', 'Kiek kojų turi voras?', 'Ar katės visada nusileidžia ant kojų?'];
const answerBiology = ['žolėdžiai', 'Taip', '8', 'Ne'];

const questionsLanguage = ['Įrašykite raidę: šviečia sa_lė', 'Įrašykite raidę: katė m_ega', 'Įrašykite raidę: šuo _aidžia', 'Įrašykite raidę: vaikai bė_gioja'];
const answerLanguage = ['u', 'i', 'ž', ''];

export var skk = 0;
export function easyPoints(variable) 
{ 
  
  if (variable > 0)
  {
    skk = variable;
    return (0);
  }
 
  else
 {
    return (0);

 }
}

export  class TopicsMath extends Component{

  constructor(){
    super();
    this.state = { textValue: questionsMath[0%questionsMath.length], count: 0, value : '' , clicks:0}
    this.onPressButton= this.onPressButton.bind(this);
}



onPressButton() {

  const { value, clicks }  = this.state ;

  if(value == ''){
    this.setState({emptyTextValue : 'Answer blank is empty, points were not addead'}) ;
  }
  else{
      
      if (value == answerMath[this.state.clicks%questionsMath.length])
      {
        this.setState({ count: this.state.count + 1});
        this.setState({emptyTextValue : ''}) ;
      }
      else{
        this.setState({emptyTextValue : 'Wrong'}) ;
      }
     // this.setState({emptyTextValue  : ''}) ;
  }
  this.setState({
    clicks: this.state.clicks + 1 //galima prideti taskus sitaip
  }); 
  this.setState({    
      textValue: questionsMath[(this.state.clicks+1)%questionsMath.length],//galima keisti klausimus sitaip
      value:'',
  })  
}


onFinish = (count) => {
  easyPoints(count);
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
  <Text style={{color: 'black',fontSize:20, margin: 10, alignSelf:'center'}}> {this.state.textValue} </Text>
  <Text style={{color: 'red',fontSize:12, alignSelf:'center'}}>{this.state.emptyTextValue}  </Text>
  <TextInput  placeholder='Answer' onChangeText={(text) => this.setState({value:text})} value={this.state.value}  keyboardType='numeric'  style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
 </View>

   </ScreenContainer>
   );
 }

}
export  class TopicsHistory extends Component{

  constructor(){
    super();
    this.state = { textValue: questionsHistory[0%questionsHistory.length], count: 0, value : '' , clicks:0}
    this.onPressButton= this.onPressButton.bind(this);
}



onPressButton() {

  const { value, clicks }  = this.state ;

  if(value == ''){
    this.setState({emptyTextValue : 'Answer blank is empty, points were not addead'}) ;
  }
  else{
      
      if (value == answerHistory[this.state.clicks%questionsHistory.length])
      {
        this.setState({ count: this.state.count + 1});
        this.setState({emptyTextValue : ''}) ;
      }
      else{
        this.setState({emptyTextValue : 'Wrong'}) ;
      }
     // this.setState({emptyTextValue  : ''}) ;
  }
  this.setState({
    clicks: this.state.clicks + 1 //galima prideti taskus sitaip
  }); 
  this.setState({    
      textValue: questionsHistory[(this.state.clicks+1)%questionsHistory.length],//galima keisti klausimus sitaip
      value:'',
  })  
}

onFinish = (count) => {
  easyPoints(count);
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
  <Text style={{color: 'black',fontSize:20, margin: 10, alignSelf:'center'}}> {this.state.textValue} </Text>
  <Text style={{color: 'red',fontSize:12, alignSelf:'center'}}>{this.state.emptyTextValue}  </Text>
  <TextInput  placeholder='Answer' onChangeText={(text) => this.setState({value:text})} value={this.state.value}  keyboardType='default'  style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
</View>

   </ScreenContainer>
   );
 }

}

export  class TopicsBiology extends Component{

  constructor(){
    super();
    this.state = { textValue: questionsBiology[0%questionsBiology.length], count: 0, value : '' , clicks:0}
    this.onPressButton= this.onPressButton.bind(this);
}



onPressButton() {

  const { value, clicks }  = this.state ;

  if(value == ''){
    this.setState({emptyTextValue : 'Answer blank is empty, points were not addead'}) ;
  }
  else{
      
      if (value == answerBiology[this.state.clicks%questionsBiology.length])
      {
        this.setState({ count: this.state.count + 1});
        this.setState({emptyTextValue : ''}) ;
      }
      else{
        this.setState({emptyTextValue : 'Wrong'}) ;
      }
     // this.setState({emptyTextValue  : ''}) ;
  }
  this.setState({
    clicks: this.state.clicks + 1 //galima prideti taskus sitaip
  }); 
  this.setState({    
      textValue: questionsBiology[(this.state.clicks+1)%questionsBiology.length],//galima keisti klausimus sitaip
      value:'',
  })  
}

onFinish = (count) => {
  easyPoints(count);
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
  <Text style={{color: 'black',fontSize:20, margin: 10, alignSelf:'center'}}> {this.state.textValue} </Text>
  <Text style={{color: 'red',fontSize:12, alignSelf:'center'}}>{this.state.emptyTextValue}  </Text>
  <TextInput  placeholder='Answer' onChangeText={(text) => this.setState({value:text})} value={this.state.value}  keyboardType='default'  style={styles.input} underlineColorAndroid={'transparent'} />
  <Button title= 'Submit answer' onPress= {this.onPressButton}/>
</View>

   </ScreenContainer>
   );
 }

}

export  class TopicsLanguage extends Component{

  constructor(){
    super();
    this.state = { textValue: questionsLanguage[0%questionsLanguage.length], count: 0 , value : '', clicks:0}
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton() {

  const { value, clicks }  = this.state ;

  if(value == ''){
    this.setState({emptyTextValue : 'Answer blank is empty, points were not addead'}) ;
  }
  else{
      
      if (value == answerLanguage[this.state.clicks%questionsLanguage.length])
      {
        this.setState({ count: this.state.count + 1});
        this.setState({emptyTextValue : ''}) ;
      }
      else{
        this.setState({emptyTextValue : 'Wrong'}) ;
      }
     // this.setState({emptyTextValue  : ''}) ;
  }
  this.setState({
    clicks: this.state.clicks + 1 //galima prideti taskus sitaip
  }); 
  this.setState({    
      textValue: questionsLanguage[(this.state.clicks+1)%questionsLanguage.length],//galima keisti klausimus sitaip
      value:'',
  })  
}

  onFinish = (count) => {
    easyPoints(count);
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
  <Text style={{color: 'black',fontSize:20, margin: 10, alignSelf:'center'}}> {this.state.textValue} </Text>
  <Text style={{color: 'red',fontSize:12, alignSelf:'center'}}>{this.state.emptyTextValue}  </Text>
  <TextInput  placeholder='Answer' onChangeText={(text) => this.setState({value:text})} value={this.state.value}  keyboardType='default'  style={styles.input} underlineColorAndroid={'transparent'} />
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