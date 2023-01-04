import GariIcon from '../GariIcon'
import PrimaryText from '../Typology/PrimaryText'
import { View } from 'react-native'
import RowBox from '../Containers/InLineContainer'
import SecondaryText from '../Typology/SecondaryText'
import TextIconBox from '../Containers/TextIconBox'

const RankPopup = () => {
  return (
    <View style={{width:'100%',display:'flex',alignItems:'center'}}>
    <RowBox style={{width:'90%'}}>
     <View style={{width:'60%'}}>
     <PrimaryText style={{fontSize:14}}>Wallet Address</PrimaryText>
     <PrimaryText style={{fontSize:16}}>2xg5jsy7...</PrimaryText>
    </View>
   
     <View style={{width:'40%'}}>
     <PrimaryText style={{fontSize:14,textAlign:'left'}}>Rank</PrimaryText>
     <PrimaryText style={{fontSize:26,textAlign:'right'}}>#1</PrimaryText>
    </View>
  
   </RowBox>
  
   <RowBox style={{width:'90%'}}>
     <View style={{width:'60%'}}>
     <PrimaryText style={{fontSize:14}}>Amount Staked</PrimaryText>
     <TextIconBox>
     <PrimaryText style={{fontSize:18}}>325.55</PrimaryText>
      <GariIcon size={18}/>
     </TextIconBox>
     <SecondaryText style={{fontSize:18}}>$278.45</SecondaryText>
    </View>
   
     <View style={{width:'40%'}}>
     <PrimaryText style={{fontSize:16,textAlign:'left'}}>Staking Score</PrimaryText>
     <PrimaryText style={{fontSize:18,textAlign:'right'}}>3476.56</PrimaryText>
    </View>
    </RowBox>
    </View>
  )
}

export default RankPopup