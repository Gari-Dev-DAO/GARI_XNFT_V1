import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNav from './HomeStackNav';
import GameStackNav from './GamesStackNav';
import AdminStackNav from './AdminStackNav';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { usePublicKey } from '../hooks/xnftConnection/hooks';
import { getAllAdmins } from '../services/GameDBApis';
import { useState,useEffect } from 'react';

const Tab = createBottomTabNavigator();

const MainTabNav = () => {
  const publicKey=usePublicKey()
 
  const [isValidAdmin,setValidAdmin]=useState(false)
 

  const getAndCheckAdmin=async()=>{
    const admins=await getAllAdmins()
    if(admins && admins!='error')
   {
    const data=admins.find((admin)=>{
      return (admin==publicKey)
    })
    if (data) setValidAdmin(true)
   }

  }

 
  useEffect(() => {
   getAndCheckAdmin()
  
  }, [publicKey])

  
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#07873c',
      tabBarStyle: { backgroundColor:'#53045c',shadowOffset:0,elevation:0,borderWidth:0,padding:7 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNav}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Games"
      component={GameStackNav}
      options={{
        tabBarLabel: 'Games',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="game-controller" size={24} color={color} />
        ),
        headerShown: false
      }}
    />
    { isValidAdmin &&
    <Tab.Screen
      name="Admin"
      component={AdminStackNav}
      options={{
        tabBarLabel: 'Admin',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="admin-panel-settings" size={24} color={color} />
        ),
        headerShown: false
      }}
    /> }
  </Tab.Navigator>
  )
}

export default MainTabNav


