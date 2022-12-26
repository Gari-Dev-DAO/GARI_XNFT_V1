import { Text ,StyleSheet } from "react-native"
const SmallText = ({children,style}) => {
  return (
   <Text style={[styles.smallText,style]}>{children}</Text>
  )
}
const styles=StyleSheet.create({
    smallText:{
        color:'rgba(255, 255, 255, 0.5)',
        lineHeight:17
    }
})
export default SmallText