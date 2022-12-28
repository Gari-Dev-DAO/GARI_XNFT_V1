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
    backgroundColor:'#745384',
    margin:'auto',
    marginBottom:7,
    marginTop:5
   }
})
export default RoundedIcon