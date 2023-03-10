import { View ,StyleSheet} from "react-native"

const RowBox = ({children,style}) => {
  return (
   <View style={[styles.box,style]} > {children}</View>
  )
}
const styles=StyleSheet.create({
    box:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
       
        alignItems:'center'
    }
})
export default RowBox