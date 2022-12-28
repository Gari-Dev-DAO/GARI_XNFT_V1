import { Overlay } from "@rneui/themed";
import { Pressable, StyleSheet } from "react-native";

const OverLay = ({ visible, setVisible, children }) => {
  return (
    <Overlay isVisible={visible} overlayStyle={styles.overlay} backdropStyle={{backgroundColor:'rgba(76, 21, 89,0.95)'}}>
      {children}
      <Pressable onPress={() => setVisible(!visible)} style={styles.cut} > X </Pressable>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#4c1559",
    display: "flex",
    width: 320,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    padding: 20,
    position:'relative'
  },
  cut:{
    position:'absolute',
    top:5,
    right:10,
    display:'flex',
   color:'#FFFFFF',
   fontSize:20
  }
});

export default OverLay;
