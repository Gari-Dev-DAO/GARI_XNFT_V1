import { Overlay } from "@rneui/themed";
import { Pressable, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import PopUpCtnr from "./gradients/PopUpCtnr";
const OverLay = ({ visible, setVisible, children }) => {
  return (
    
    <Overlay isVisible={visible} overlayStyle={styles.overlay} backdropStyle={{backgroundColor:'#9018d0'}}>
   <PopUpCtnr>
      {children}
      <Pressable onPress={() => setVisible(!visible)} style={styles.cut} > <Entypo name="cross" size={32} color="yellow" /> </Pressable>
      </PopUpCtnr>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    display: "flex",
    width: 320,
    position:'relative',
    padding:0,
    borderRadius:20,
    borderWidth:0,
  },
  cut:{
    position:'absolute',
    top:5,
    right:10,
  }
});

export default OverLay;
