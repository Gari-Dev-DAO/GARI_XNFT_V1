import { View,StyleSheet } from "react-native"

const Box = ({children,style}) => {
  return (
    <View style={[styles.box,style]} testID='box'>{children}</View>
  )
}
const styles=StyleSheet.create({
    box:{
        borderRadius:20,
        display:"flex",
        alignItems:"center",
        width:270,
        borderWidth:2,
        borderColor:"#FFFFFF",
        padding:10,
        marginTop:4,
        marginBottom:4
       
    }
})
export default Box