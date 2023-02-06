import * as React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import { usePublicKey } from "../hooks/xnftConnection/hooks";


const GameIframe = ({ route }) => {
  const { url,free } = route.params;
  const publicKey = usePublicKey()
  const query=`user=${publicKey}&free=${free}`

  return (
    <View style={{ height: 600 }}>
      {
        publicKey &&
        <WebView
          mixedContentMode="compatibility"
          style={{ flex: 1, height: '100%', width: '100%' }}
          originWhitelist={['*']}
          source={{ uri: `${url}?${query}` }}
        />}
    </View>
  )
}

export default GameIframe;


// webview is loading only when publickKey 
//is set and that publickey send to game for db based communication.
