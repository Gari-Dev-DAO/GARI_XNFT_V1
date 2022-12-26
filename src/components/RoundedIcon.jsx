import { Icon } from '@rneui/themed';
import { View,StyleSheet } from 'react-native';

const RoundedIcon = ({name,type,dimension}) => {
  return (
    <View style={[styles.iconBox,{height:dimension,width:dimension}]}>
       
    </View>
  )
}
const styles=StyleSheet.create({
   iconBox:{
    borderRadius:'50%',
    borderWidth:1,
    borderColor:"#FFFFFF",
    backgroundColor:'#745384'
   }
})
export default RoundedIcon