import { StyleSheet,View,Image,Text } from "react-native";
import PrimaryText from "../Typology/PrimaryText";
import GameBtn from "../gradients/GameBtn";

const PlayGame = ({navigateToGameIframe}) => {
  return (
    <View style={styles.stake}>
    <Image
     source={require('../../../assets/solana.png')}
     style={{display:'flex',height:'60px',width:'60px'}}
   />
   <Text style={{color:'yellow',fontSize:'20px',fontWeight:'400'}}>0.2 SOL</Text>
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <PrimaryText style={{lineHeight:16}}>You've</PrimaryText>
  <PrimaryText style={{lineHeight:16, margin:'auto'}}>placed the bet</PrimaryText>
  </View>
   <GameBtn onPress={navigateToGameIframe} title="Play Game" />
 </View>
  )
}

const styles=StyleSheet.create({
    stake: {
      flex: 1,
      alignItems: "center",
      justifyContent:'center',
      gap:'20px'
    }
  })
  
export default PlayGame