import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home'
import Settings from './Screens/Settings'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from './Components/Header';
import MyComponent from './Screens/Customer';
import firebase from './Backend/config'
import ReadItem from './Screens/ReadItem';
import searchitems from './Screens/searchitems'
// import GetDoc from './Screens/GetDoc';

import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawersRoutes() {
  return (
<Drawer.Navigator >
<Drawer.Screen name="MANAGE ORDERS" component={searchitems} />
<Drawer.Screen name="CUSTOMER" component={MyComponent} />
<Drawer.Screen name="Items" component={ReadItem} />
{/* <Drawer.Screen name="Doc" component={GetDoc} /> */}
<Stack.Screen name="Logout" component={Dashboard} />
</Drawer.Navigator>



);
}
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#03045e',
              shadowRadius: 3,
              shadowOpacity: 0.5,
              shadowOffset: { width: 1, height: 3},
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{ title: 'Signup' }}
          />       
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={
              {title: 'Login',
              headerLeft: null} 
            }
          />
          <Stack.Screen 
           name="Dashboard" 
           component={searchitems} 
           options={
             { title: 'Dashboard' ,
             headerLeft: null} 
           }
          />
       
    
        <Stack.Screen 
         name="DrawerRoutes" component={DrawersRoutes}
         options={{ headerShown: false }}
         /> 
          
  
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default App;



