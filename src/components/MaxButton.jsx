import { LinearGradient } from 'expo-linear-gradient'
import { Pressable,Text ,StyleSheet} from 'react-native'

const MaxButton = ({onPress}) => {
  return (
    <LinearGradient colors={["#CF385C", "#F06F6C"]} style={styles.maxButton}>
      <Pressable onPress={onPress} style={styles.btn}><Text style={{color:'#FFFFFF'}}>MAX</Text></Pressable>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    maxButton:{
        paddingLeft:6,
        paddingRight:6,
        borderRadius:5,
        display:'flex',
        margin:'auto',
        paddingTop:2,
        paddingBottom:2
    },
    btn:{
      width:'100%',
      height:'100%'
    }
  });

export default MaxButton