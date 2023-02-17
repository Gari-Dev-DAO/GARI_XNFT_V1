import * as React from "react";
import { ScrollView ,ActivityIndicator,Dimensions} from "react-native";
import { useState } from "react";
import ScreenConatainer from "../components/gradients/ScreenConatiner";

const Iframe = ({ route }) => {
  const [isLoading,setIsLoading]=useState(true)
  const [show,setShow]=useState({display:'none'})
  const { url } = route.params;
  

  const hideSpinner=()=>{
    setShow({})
    setIsLoading(false)
  }
 
  return (
    <ScrollView
    contentContainerStyle={{ minHeight: Dimensions.get('screen').height, alignItems: 'center' }}
  >
      {isLoading &&
     
      <ScreenConatainer>
      <ActivityIndicator style={{ position: 'absolute', top: 100, margin: 'auto', left: '45%' }} size='large' color='#FFFFFF' />
      </ScreenConatainer>
      }
      <iframe src={url} style={{...{height:'100%',width:'100%'},...show}}  onLoad={hideSpinner}
      ></iframe>
      
    </ScrollView>
  )
}


export default Iframe;


