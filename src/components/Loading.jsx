
import { Overlay } from "@rneui/base";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";

const Loading=()=>{
    return(
    <Overlay isVisible='true' overlayStyle={styles.overlay} backdropStyle={{backgroundColor:'rgba(76, 21, 89,0.95)'}} >
    <ActivityIndicator size='large' color="#FFFFFF"/> 
    </Overlay>
    )
}

const styles=StyleSheet.create({
    overlay:{
       backgroundColor: "#4c1559",
    }
})


export default Loading