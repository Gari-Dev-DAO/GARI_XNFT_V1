import GariIcon from '../components/GariIcon'
import Heading from '../components/Heading'
import { View } from 'react-native'
import RowBox from '../components/RowBox'
import SmallText from '../components/SmallText'
import TextIconBox from '../components/TextIconBox'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Score = () => {
  return (
    <View style={{width:'100%',marginBottom:10,marginTop:5}}>
    <RowBox style={{width:'100%'}}>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:10}}>Wallet Address<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></Heading>
     <Heading style={{fontSize:12}}>2xg5jsy7...</Heading>
    </View>
   
     <View style={{width:'40%',textAlign:'right'}}>
     <Heading style={{fontSize:10,textAlign:'left'}}>Rank<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></Heading>
     <Heading style={{fontSize:24,textAlign:'right'}}>#1</Heading>
    </View>
  
   </RowBox>
  
   <RowBox style={{width:'100%'}}>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:10}}>Amount Staked<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></Heading>
     <TextIconBox>
     <Heading style={{fontSize:14}}>325.55</Heading>
      <GariIcon size={14}/>
     </TextIconBox>
     <SmallText style={{fontSize:14}}>$278.45</SmallText>
    </View>
   
     <View style={{width:'40%'}}>
     <Heading style={{fontSize:10}}>Staking Score<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></Heading>
     <Heading style={{fontSize:14}}>3476.56</Heading>
    </View>
    </RowBox>
    </View>
  )
}

export default Score