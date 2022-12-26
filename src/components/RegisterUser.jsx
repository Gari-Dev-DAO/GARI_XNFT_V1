import { useState } from "react"
import {View , StyleSheet} from "react-native"
import { TextInput } from "react-native"
import Button from "./Button"


const RegisterUser = ({setregistered}) => {
const [userName,setUserName]=useState()
const [password,setpassword]=useState()

  return (
   <View style={styles.form} >
    <TextInput  value={userName}  onChangeText ={setUserName} placeholder='UserName' />
    <TextInput  secureTextEntry={true} value={password}  onChangeText ={setpassword} placeholder='password' />
    <Button onPress={()=>{setregistered(true)}} title="Register" />
   </View>
  )
}

const styles=StyleSheet.create({
  filterButton:{
    display:"flex",
    margin:10,
    borderRadius:10,
    backgroundColor:"#038cfc",
    padding:10,
    color:"#FFFFFF"
  },
  form:{
    flex:1,
    alignItems:"center"
  }
  })
export default RegisterUser