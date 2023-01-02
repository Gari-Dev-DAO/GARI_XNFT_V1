import { View ,StyleSheet} from "react-native"

const TextIconBox = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}
const styles=StyleSheet.create({
    container:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center'
    }
})
export default TextIconBox