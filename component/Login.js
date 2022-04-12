// components/login.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,  Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';
import { Button,Card } from 'react-native-paper';
import { Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
        <View style={styles.container}> 
          {/* <Card style={styles.cards}> */}
        <View style={{flexDirection: 'row', alignContent:'space-between',width:'100%',marginLeft:'20%',marginRight:'20%'}}> 
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          style={styles.inputStyle}
          autoComplete="email"
          placeholder="   Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        </View>
        <View style={{flexDirection: 'row', width: '100%',alignSelf:'center',marginLeft:'20%',marginRight:'20%'}}>
        <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
        <TextInput
          style={styles.inputStyle}
          placeholder="    Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        /> 
        </View>
        <View style={{alignItems: 'center',width: '60%'}}>
        <Button
          color="#03045e"
          mode="contained"
          style={{
            borderRadius: "8",
            borderWidth: "1",
            margin: "10",
            elevation: "3",
            
          }}
          dark="true"
          onPress={() => this.userLogin()}
        > Sign in </Button></View>  
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to <Text style={{fontWeight:'bold'}}>signup</Text>
        </Text>
        {/* </Card> */}
        </View>                          
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputStyle: {
    width: "80%",
    marginLeft: 5,
    marginBottom: 15,
    paddingBottom: 15,
    paddingTop: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    paddingTop: 5,
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#4361ee",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cards: {
    height: "20%",
    width: "60%",
    borderColor: "#3740FE",
    borderWidth: 1,
    padding: 30,
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3},
    borderRadius: 5,
    marginTop:20,
    marginBottom:20,
   
  }
});