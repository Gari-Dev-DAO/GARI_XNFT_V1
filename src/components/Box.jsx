import { View,StyleSheet } from "react-native"

const Box = ({children}) => {
  return (
    <View style={styles.box} testID='box'>{children}</View>
  )
}
const styles=StyleSheet.create({
    box:{
        borderRadius:20,
        display:"flex",
        alignItems:"center",
        width:270,
        borderWidth:2,
        borderColor:"#FFFFFF"
    }
})
export default Box