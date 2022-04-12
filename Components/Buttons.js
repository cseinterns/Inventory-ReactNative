import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Buttons() {
    return (
    
       <View>
       <View style={styles.footerbutton}>
          <View>
            <Button
             // color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="Back"
              
            />
          </View>
          <View>
            <Button
              //color="green"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="Submit Order"
            />
          </View>
          <View>
            <Button
              borderRadius="8"
              borderWidth="1"
              elevation="3"
              title="Save Draft Order"
            />
          </View>
          <View>
            <Button
              //color="red"
              borderRadius="8"
              borderWidth="1"
              elevation="3"
              title="Delete Order"
            />
          </View>
          <View>
            <Button
             // color="purple"
              borderRadius="8"
              borderWidth="1"
              elevation="3"
              title="Logout"
            />
          </View>
        </View>
        <StatusBar style="auto" />
        </View>
    //   </View>
    );
  }


const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent:"space-evenly",
//   },
//   baseText: {
//     fontFamily: "Cochin"
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: "bold"
//   },
  footerbutton:{
    flexDirection: 'row' ,  
    justifyContent: 'space-evenly' , 
    alignItems: "center",
    marginTop:40,
  },
  buttongen:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'Green'
  }
});
