import * as React from "react";
import { ScrollView,ActivityIndicator,Dimensions ,View} from "react-native";
import { usePublicKey } from "../hooks/xnftConnection/hooks";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import { useState } from "react";


const GameIframe = ({ route }) => {
  const { gameUrl,free } = route.params;
  const publicKey = usePublicKey()
  const query=`user=${publicKey}&free=${free}`
  const [isLoading,setIsLoading]=useState(true)
  const [show,setShow]=useState({display:'none'})
  
  
  const hideSpinner=()=>{
    setShow({})
    setIsLoading(false)
  }

  return (
  
    <View style={{height:Dimensions.get('screen').height-220}}>
      {isLoading &&
     
      <ScreenConatainer>
      <ActivityIndicator style={{ position: 'absolute', top: 100, margin: 'auto', left: '48%' }} size='large' color='#FFFFFF' />
      </ScreenConatainer>
      }
      <iframe src={`${gameUrl}?${query}`} style={{...{height:'100%',width:'100%'},...show}}  onLoad={hideSpinner}
      ></iframe>
      </View>
   
  )
}

export default GameIframe;

