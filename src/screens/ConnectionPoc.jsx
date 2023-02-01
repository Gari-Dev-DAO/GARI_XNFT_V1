import { View ,Text} from "react-native"
import { useEffect } from "react"
import { PublicKey } from "@solana/web3.js"
import { useConnection, usePublicKey } from "../hooks/xnftConnection/hooks"
import { WebView } from 'react-native-webview';
import * as React from 'react';

const ConnectionPoc = () => {
// const publicKey=usePublicKey()
// const connection=useConnection()
// console.log(publicKey?.toString())
// console.log(connection)

// useEffect(() => {
//   const getBal=async()=>{
//        const pk=new PublicKey('Dcsj8i8NJv6UDmhXvnuxEiPZ5VqzYEARmxFxUwuz4kNG')
//        const bal=await connection.getBalance(pk)
//        console.log(bal)
//   }
//   if(publicKey && connection)
// getBal()
// }, [publicKey,connection])


  return (
    <View style={{height:600}}>
        <WebView
      style={{flex:1,height:'100%',width:'100%'}}
      originWhitelist={['*']}
      source={{ uri: 'https://www.bonkme.tech/' }}
    />
    </View>
  )
}

export default ConnectionPoc



// problems : how to intract with devnet
// using webview in backpack