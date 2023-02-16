import { Overlay } from "@rneui/base";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";

const Loading=()=>{
    return(
    <Overlay isVisible='true' overlayStyle={styles.overlay} backdropStyle={{backgroundColor:'#9018d0'}} >
    <ActivityIndicator size='large' color="#FFFFFF"/> 
    </Overlay>
    )
}

const styles=StyleSheet.create({
    overlay:{
    backgroundColor:'transparent',
    elevation:0,
    shadowOffset:0,
    shadowOpacity:0
    }
})


export default Loading