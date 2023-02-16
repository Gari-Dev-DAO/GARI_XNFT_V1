import * as React from "react";
import { View } from "react-native";

const Iframe = ({ route }) => {
  const { url } = route.params;
  
  return (
      <View style={{flex:1,height:700}}>
        <iframe src={url} style={{height:'100%',width:'100%'}}></iframe>
        </View>
  )
}

export default Iframe;


