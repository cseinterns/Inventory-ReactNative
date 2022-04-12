import React from 'react';
import { CheckBox,Text,TextInput,View, StyleSheet,Button } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Table() {
  return (
    <View style={styles.container}>
      <DataTable style={{border: "2px solid rgb(0, 0, 0)"}}>

        <DataTable.Header >
          <DataTable.Title >Availability</DataTable.Title>
          <DataTable.Title varchar>SKUID</DataTable.Title>
          <DataTable.Title >Product Name</DataTable.Title>
          <DataTable.Title>Unit of Measure</DataTable.Title>
          <DataTable.Title numeric>Current Inventory Quantity</DataTable.Title>
          <DataTable.Title numeric>New Order Quantity</DataTable.Title>
          <DataTable.Title Button>Delete Item</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row>
          <DataTable.Cell chechbox><CheckBox/></DataTable.Cell>
          <DataTable.Cell>SKU1111</DataTable.Cell>
          <DataTable.Cell >Apple</DataTable.Cell>
          <DataTable.Cell>Palletes</DataTable.Cell>
          <DataTable.Cell><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
          <DataTable.Cell numeric style={{justifyContent:"center"}}><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
            <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
              color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="  -  "
              
            /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell chechbox><CheckBox/></DataTable.Cell>
          <DataTable.Cell>SKU1112</DataTable.Cell>
          <DataTable.Cell >American Egg Plant</DataTable.Cell>
          <DataTable.Cell>Palletes</DataTable.Cell>
          <DataTable.Cell><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
          <DataTable.Cell numeric><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
           <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
              color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="  -  "
              
            /></DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell chechbox><CheckBox/></DataTable.Cell>
          <DataTable.Cell>SKU1113</DataTable.Cell>
          <DataTable.Cell >American Sweet Potato</DataTable.Cell>
          <DataTable.Cell>Carts</DataTable.Cell>
          <DataTable.Cell><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
          <DataTable.Cell numeric><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
           <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
              color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="  -  "
              
            /></DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row>
          <DataTable.Cell chechbox><CheckBox /></DataTable.Cell>
          <DataTable.Cell>SKU1114</DataTable.Cell>
          <DataTable.Cell >Arvi</DataTable.Cell>
          <DataTable.Cell>Carts</DataTable.Cell>
          <DataTable.Cell><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
          <DataTable.Cell numeric><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                padding: 10,
                width:"80%",
                marginLeft:10,
              }}
            /> </DataTable.Cell>
           <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
              color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="  -  "
              
            /></DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  header:
   { height: 40,fontFamily:"Times-New-Roman",fontWeight:"bold",backgroundColor: "white" },
});

