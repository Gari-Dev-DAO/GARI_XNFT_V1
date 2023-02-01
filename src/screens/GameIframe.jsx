import * as React from "react";
import { useRef ,useEffect} from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

const GameIframe = ({route}) => {
   
const webviewRef = useRef();
const {url}=route.params;
function sendDataToWebView() {
    window.ReactNativeWebView.postMessage("counter");
  }
  const wind=window.ReactNativeWebView;
  useEffect(() => {
    if(wind)
    sendDataToWebView()
    console.log(wind)
  }, [wind])
  
  


return (
<View style={{height:600}}>
<WebView
style={{flex:1,height:'100%',width:'100%'}}
originWhitelist={['*']}
source={{ uri: url }}
/>
</View>
 )
}

export default GameIframe;




 
