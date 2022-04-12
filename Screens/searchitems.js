import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  CheckBox,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { DataTable , Searchbar} from 'react-native-paper';
import firebase from '../Backend/config';
import { MaterialIcons } from '@expo/vector-icons';
import Dashboard from '../component/Dashboard';
export default class searchitems extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       items: []
//     };
//   }
  constructor() {
    super();
    this.docs = firebase.firestore().collection('Item');
    this.state = {
       
        uid: '',
      
      isLoading: false,
      item: [],
      items: []
    };
  }





  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  // render() {
  //   this.state = { 
  //     displayName: firebase.auth().currentUser.displayName,
  //     uid: firebase.auth().currentUser.uid
  //   }    
//   loaditems = async () => {
    // const permission = await Expo.Permissions.askAsync(
    //   Expo.Permissions.CONTACTS
    // );

    // if (permission.status !== 'granted') {
    //   return;
    // }

    // const { data } = await Contacts.getContactsAsync({
    //   fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails]
    // });

    // console.log(data);
    // this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
//   };

fetchCollection = (querySnapshot) => {
    const item = [];
    const items = [];
    querySnapshot.forEach((res) => {
      const { productName, UOM, SKUID,CIQ } = res.data();
      item.push({
        key: res.id,
        productName,
        UOM,
        SKUID,
        CIQ
        
      });
      items.push({
        key: res.id,
        productName,
        UOM,
        SKUID,
        CIQ
        
      });
    });
    this.setState({
      item,
      items,
      isLoading: false
   });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.unsubscribe = this.docs.onSnapshot(this.fetchCollection);
  }

//   componentWillUnmount() {
//       this.unsubscribe();
//   }

  renderItem = ({ item }) => (
    // <View style={{ minHeight: 70, padding: 5 }}>
    //   <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 26 }}>
    //     {item.firstName + ' '}
    //     {item.lastName}
    //   </Text>
    //   <Text style={{ color: 'white', fontWeight: 'bold' }}>
    //     {item.phoneNumbers[0].digits}
    //   </Text>
    // </View>
     
    // <ScrollView style={styles.wrapper}>


<DataTable>

{/* <DataTable.Header>
  <DataTable.Title>Availability</DataTable.Title>
  <DataTable.Title varchar>SKUID</DataTable.Title>
  <DataTable.Title>Product Name</DataTable.Title>
  <DataTable.Title>Unit of Measure</DataTable.Title>
  <DataTable.Title numeric>Current Inventory Quantity</DataTable.Title>
  <DataTable.Title numeric>New Order Quantity</DataTable.Title>
  <DataTable.Title Button>Delete Item</DataTable.Title>
</DataTable.Header> */}
{/* {
            this.state.item.map((res, i) => {
              return (

                <> */}
        <DataTable.Row>
          <DataTable.Cell chechbox><CheckBox/></DataTable.Cell>
          <DataTable.Cell>{item.SKUID}</DataTable.Cell>
          <DataTable.Cell >{item.productName}</DataTable.Cell>
          <DataTable.Cell>{item.UOM}</DataTable.Cell>
          <DataTable.Cell><TextInput
              keyboardType="numeric"
              style={{
                fontWeight: "bold",
                borderColor: "Black",
                borderWidth: 1,
                alignItems: 'center',
                height:"50%",
                width:"80%",
                padding: 10
              }}
              value={this.state.CIQ}
              onChangeText={(val) => this.inputEl(val, 'CIQ')}
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
              value={this.state.NOQ}
              onChangeText={(val) => this.inputEl(val, 'NOQ')}
            /> </DataTable.Cell>
            {/* <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
              color="black"
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="  -  "
              
            /></DataTable.Cell> */}
        </DataTable.Row>

        {/* </>
         );
        })
      } */}

          </DataTable>
        //   </ScrollView>

  );

  searchitems = value => {
    const filtereditems = this.state.item.filter(items => {
      let ProductLowercase = (
        items.productName   ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return ProductLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ items: filtereditems });
  };

  searchsku = value => {
    const filtereditemsid = this.state.item.filter(items => {
      let skuLowercase = (
        items.SKUID   ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return skuLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ items: filtereditemsid });
  };

  inputEl = (val, prop) => {
    const state = this.state;
    if(val>0)
    {state[prop] = val;
      this.setState(state);}
  }

  editItem() {
    this.setState({
      isLoading: true,
    });
    const docUpdate = firebase.firestore().collection('Item').doc(this.state.key);
    docUpdate.set({
      NOQ : this.state.NOQ,
      CIQ: this.state.CIQ,
    }).then((docRef) => {
      this.setState({
        key: '',
        NOQ: '',
        CIQ: '',
        isLoading: false,
      });
      // this.props.navigation.navigate('ReadItem');
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <View style={{ flex: 1,backgroundColor: '#ffffff'   }}>
        <SafeAreaView style={{  }} />
        <View>
        <Searchbar
          placeholder="Search by Product Name"
          placeholderTextColor="#000000"
          style={{
            backgroundColor: '#E6F3F5',
            height: 50,
            fontSize: "50%",
            padding: 10,
            margin:15,
            color: 'white',
            width: "42.5%",
            borderBottomWidth: 0.5,
            borderBottomColor: '#7d90a0'
          }}
          onChangeText={value => this.searchitems(value)}
        />
        </View>
        <View>
        <Searchbar
          placeholder="Search by SKUID"
          placeholderTextColor="#000000"
          style={{
            backgroundColor: '#E6F3F5',
            height: 50,
            fontSize: "50%",
            padding: 10,
            margin: 15,
            width: "42.5%",
            color: 'white',
            borderBottomWidth: 0.5,
            borderBottomColor: '#7d90a0'
          }}
          onChangeText={value => this.searchsku(value)}
        />  
        </View>
        <View style={{ flex: 1}}>
          {this.state.isLoading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ActivityIndicator size="large" color="#bad555" />
            </View>
          ) : null}
          <View style={{backgroundColor: '#ffffff' }}>
          <DataTable style={{borderRadius: 5,margin:5, border: "2px solid rgb(0, 0, 0)" }}>

<DataTable.Header style={{backgroundColor: "#E6F3F5"}}>
  <DataTable.Title><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman',alignContent:'center'}}>Availability</Text></DataTable.Title>
  <DataTable.Title varchar><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman',alignSelf:'center'}}>SKUID</Text></DataTable.Title>
  <DataTable.Title><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman'}}>Product Name</Text></DataTable.Title>
  <DataTable.Title><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman'}}>Unit of Measure</Text></DataTable.Title>
  <DataTable.Title numeric><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman',textAlign:'center'}}>Current Inventory Quantity</Text></DataTable.Title>
  <DataTable.Title numeric><Text style={{color:"black",fontSize:14,fontFamily:'TimesNewRoman',alignSelf:'center'}}>New Order Quantity</Text></DataTable.Title>
  {/* <DataTable.Title Button>Delete Item</DataTable.Title> */}
</DataTable.Header>
<ScrollView style={styles.wrapper}>
          <FlatList
            data={this.state.items}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
                }}
              >

                <Text style={{ color: '#890620',fontsize:36 ,fontStyle:'serif' ,fontWeight: 'bold'}}>No Items Found</Text>
              </View>
            )}
          />
</ScrollView>
          </DataTable>
          </View>
        </View>
        <View styles={styles.footerbutton}>
        <View style={{}}>
        <Button
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="Submit Order"
              onPress={() => this.editItem()} 
            />
        </View>
        <View style={{}}>
        <Button
              borderRadius="8"
              borderWidth="1"
              margin="10"
              elevation="3"
              title="Logout"
              onPress={() => this.signOut()} 
            />
        </View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    // paddingBottom: 20
   },
   loader: {
     position: 'absolute',
     alignItems: 'center',
     justifyContent: 'center',    
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
   },
   footerbutton:{
    flexDirection: 'row' ,  
    justifyContent: 'space-evenly' , 
    
    marginTop:40,
  }
});