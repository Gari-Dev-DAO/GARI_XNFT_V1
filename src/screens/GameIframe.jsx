import * as React from "react";
import { View } from "react-native";
import { usePublicKey } from "../hooks/xnftConnection/hooks";



const GameIframe = ({ route }) => {
  const { gameUrl,free } = route.params;
  const publicKey = usePublicKey()
  const query=`user=${publicKey}&free=${free}`

  return (
      <View style={{flex:1,height:700}}>
        <iframe src={`${gameUrl}?${query}`} style={{height:'100%',width:'100%'}}></iframe>
      </View>
  )
}

export default GameIframe;


