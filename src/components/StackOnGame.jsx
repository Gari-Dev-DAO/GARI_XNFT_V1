import {Text,View,StyleSheet, Pressable} from 'react-native'
import { useState } from 'react'
import Button from './Button'

const StakeonGame = ({setStaked}) => {
    const [Error,setError]=useState('')
    const stakeToken=()=>{
       
       try{
            //write staking code here.
            //if successful than show register Component
            setStaked(true)
       }
       catch(err)
       { setError('Some Error Occurred')}
    }

  return (
   <View style={styles.stake} >
   <Text>10 Gari</Text>
   <Button onPress={stakeToken} title="Stake" />
   <Text>{Error}</Text>
   </View>
  )
}

const styles=StyleSheet.create({
  stake:{
    flex:1,
    alignItems:"center"
  }
  })

export default StakeonGame