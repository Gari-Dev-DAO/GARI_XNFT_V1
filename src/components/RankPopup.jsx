import GariIcon from '../components/GariIcon'
import Heading from '../components/Heading'
import { View } from 'react-native'
import RowBox from '../components/RowBox'
import SmallText from '../components/SmallText'
import TextIconBox from '../components/TextIconBox'

const RankPopup = () => {
  return (
    <View style={{width:'100%',display:'flex',alignItems:'center'}}>
    <RowBox style={{width:'90%'}}>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:14}}>Wallet Address</Heading>
     <Heading style={{fontSize:16}}>2xg5jsy7...</Heading>
    </View>
   
     <View style={{width:'40%'}}>
     <Heading style={{fontSize:14,textAlign:'left'}}>Rank</Heading>
     <Heading style={{fontSize:26,textAlign:'right'}}>#1</Heading>
    </View>
  
   </RowBox>
  
   <RowBox style={{width:'90%'}}>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:14}}>Amount Staked</Heading>
     <TextIconBox>
     <Heading style={{fontSize:18}}>325.55</Heading>
      <GariIcon size={18}/>
     </TextIconBox>
     <SmallText style={{fontSize:18}}>$278.45</SmallText>
    </View>
   
     <View style={{width:'40%'}}>
     <Heading style={{fontSize:16,textAlign:'left'}}>Staking Score</Heading>
     <Heading style={{fontSize:18,textAlign:'right'}}>3476.56</Heading>
    </View>
    </RowBox>
    </View>
  )
}

export default RankPopup