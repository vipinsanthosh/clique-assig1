import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, 
          KeyboardAvoidingView, Image, 
          AsyncStorage, TouchableOpacity,
        }  from 'react-native';

const Page1 = props => {
    
  const [phone, setPhone] = useState('');

  const phoneInputHandler = (enteredText) => {
    setPhone(enteredText);
  };
  
  saveData = () =>{
    let pno = phone;
    AsyncStorage.setItem('phoneNumb',pno);
    
  }

  showData = async() =>{
    pho123 = await AsyncStorage.getItem('phoneNumb');
  }




  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.container}>

      <View style={styles.textAll}>
      
      <Text style={styles.find}>find</Text>
      
      <Text style={styles.acti}>Activities</Text>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>Become a member!</Text>
      <Text>See your friends' activities.</Text>
      
      <TextInput style={styles.phoneNo} 
          placeholder="Enter Your Mobile Number"  
          keyboardType='numeric' 
          onChangeText={phoneInputHandler} 
      /> 
      

      </View>
  
    </View>
    <TouchableOpacity style={styles.arrow} activeOpacity={0.5} 
    onPress={ () =>{saveData(); props.navigation.navigate({routeName:'Page2'});showData();}} >
     <Image 
       source={require('../assets/Arrow.png')}
     />
     </TouchableOpacity>
     
    
    </KeyboardAvoidingView>
    

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingLeft:30,
    },
    textAll : {
      textAlign: 'right',
    },
    find: {
      fontSize: 80,
      fontFamily: 'open-find',
      color: 'orange',
      paddingBottom: 0,
    },
  
    acti: {
      paddingTop: 0,
      fontSize: 50,
      fontFamily: 'open-thin',
    },
  
    welcome:{
      fontWeight: 'bold',
      paddingTop: 50,
      paddingBottom:30,
      fontSize: 20,
    },
  
    phoneNo:{
      paddingTop: 100,
      fontSize : 20,
    },
  
    arrow:{
      alignItems: "center",
      paddingTop: 30,
      paddingBottom:20,
      paddingRight: 20,
    },
  });

export default Page1;