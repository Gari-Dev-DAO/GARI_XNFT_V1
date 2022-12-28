import { View ,StyleSheet} from "react-native"

const RowBox = ({children}) => {
  return (
   <View style={styles.box} > {children}</View>
  )
}
const styles=StyleSheet.create({
    box:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:220
    }
})
export default RowBox