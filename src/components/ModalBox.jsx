import { View } from "react-native"
import { Pressable, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

const ModalBox = ({visible,setVisible,children,style}) => {
  return (
    <View  style={[styles.overlay,style,visible && {display:'flex'},]} >
    {children}
    <Pressable onPress={() => setVisible(!visible)} style={[styles.cut]} > <Entypo name="cross" size={28} color="white" /> </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    overlay: {
      backgroundColor: "#4c1559",
      display: "flex",
      width: 320,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#FFFFFF",
      padding: 15,
      position:'absolute',
      display:'none',
      zIndex:100
    },
    cut:{
      position:'absolute',
      top:5,
      right:10,
    }
  });
export default ModalBox