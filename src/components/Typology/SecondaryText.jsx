import { Text ,StyleSheet } from "react-native"
const SecondaryText = ({children,style}) => {
  return (
   <Text style={[styles.smallText,style]}>{children}</Text>
  )
}
const styles=StyleSheet.create({
    smallText:{
        color:'rgba(255, 255, 255, 0.5)',
        lineHeight:20,
        fontWeight:500,
        lineHeight:18,
        position:'relative'
        
    }
})
export default SecondaryText