import GariIcon from '../GariIcon'
import PrimaryText
from '../Typology/PrimaryText'
import { View } from 'react-native'
import RowBox from '../Containers/InLineContainer'
import SecondaryText from '../Typology/SecondaryText'
import TextIconBox from '../Containers/TextIconBox'
import { Ionicons } from '@expo/vector-icons';


const StakerRanking = () => {
  return (
    <View style={{width:'100%',marginBottom:10,marginTop:5}}>
    <RowBox style={{width:'100%'}}>
     <View style={{width:'60%'}}>
     <PrimaryText style={{fontSize:10}}>Wallet Address<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></PrimaryText>
     <PrimaryText style={{fontSize:12}}>2xg5jsy7...</PrimaryText>
    </View>
   
     <View style={{width:'40%',textAlign:'right'}}>
     <PrimaryText style={{fontSize:10,textAlign:'left'}}>Rank<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></PrimaryText>
     <PrimaryText style={{fontSize:24,textAlign:'right'}}>#1</PrimaryText>
    </View>
  
   </RowBox>
  
   <RowBox style={{width:'100%'}}>
     <View style={{width:'60%'}}>
     <PrimaryText style={{fontSize:10}}>Amount Staked<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></PrimaryText>
     <TextIconBox>
     <PrimaryText style={{fontSize:14}}>325.55</PrimaryText>
      <GariIcon size={14}/>
     </TextIconBox>
     <SecondaryText style={{fontSize:14}}>$278.45</SecondaryText>
    </View>
   
     <View style={{width:'40%'}}>
     <PrimaryText style={{fontSize:10}}>Staking Score<View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View></PrimaryText>
     <PrimaryText style={{fontSize:14}}>3476.56</PrimaryText>
    </View>
    </RowBox>
    </View>
  )
}

export default StakerRanking