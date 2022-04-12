import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: 50,
        marginTop: 10,
        padding:2,
        BackgroundColor: "blue",
        fontFamily: "Times New Roman",
      }}
    >
      <View>
        <MaterialCommunityIcons name="storefront" size={40} color="crimson" />
      </View>
      <View>
        <Text style={{height: 30,lineHeight: 30, padding: 20,fontSize: 20, fontWeight: "bold",justifyContent: "center"}}>ABC STORE </Text>
      </View>
    </View>
  );
}
