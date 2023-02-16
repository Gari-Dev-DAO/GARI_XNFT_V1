import { LinearGradient } from "expo-linear-gradient"
import { Pressable,Text,StyleSheet } from "react-native"

const GameBtn = ({onPress,title}) => {
  return (
    <LinearGradient colors={['#D45BFF','#DDA36A']} locations={[0.17, 0.95]} start={{ x: 0.2, y: 0.4 }} style={styles.btn}>
   <Pressable onPress={onPress} >
   <Text style={{color:'#FFFFFF',fontSize:18}}>
      {title}
      </Text>
   </Pressable>
  </LinearGradient>
  )
}
const styles=StyleSheet.create({
    btn:{
     display:'flex',
     borderRadius:5,
     paddingLeft:10,
     paddingRight:10,
     paddingTop:4,
     paddingBottom:5,
     alignItems:'center',
     justifyContent:'center'
    }
})

export default GameBtn