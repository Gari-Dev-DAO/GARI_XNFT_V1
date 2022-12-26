import { Text ,StyleSheet } from "react-native"
const SmallText = ({children,fontSize}) => {
  return (
   <Text style={[styles.smallText,{fontSize:fontSize}]}>{children}</Text>
  )
}
const styles=StyleSheet.create({
    smallText:{
        color:'rgba(255, 255, 255, 0.5)',
        lineHeight:17
    }
})
export default SmallText