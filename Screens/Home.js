import React from 'react'
import { StyleSheet, Text, View,Button,SafeAreaView,ImageBackground } from 'react-native';
import SearchBar from "../Components/SearchBar";
import Search from "../Components/Search";
import Tables from '../Components/table';
import Buttons from '../Components/Buttons';
import ReadItem from './ReadItem';

const image = { uri: "" };
export default function Home() {
return (
  <SafeAreaView>
       <ImageBackground source={image} style={{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }}>
  <View>
    <View Styles={{}}>
      <SearchBar />
    </View>
    <View>
      <Search />
    </View>
    {/* <View style={{}}>
      <Tables />
    </View> */}
    <View><ReadItem/></View>
    <View>
      <Buttons />
    </View>
  </View>
  </ImageBackground>
  </SafeAreaView>
);
}



