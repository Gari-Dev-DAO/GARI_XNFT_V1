import { View } from "react-native"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import StakingInput from "./StakingInput"

const StakingPopup = () => {
  return (
    <View style={{display:'flex'}}>
   <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:20,margin:'auto'}}>Stake Gari</Heading>
   <StakingInput/>
   <SmallText style={{fontSize:12}}>Minimum Lock-In Period : 7 days</SmallText>
   <SmallText style={{fontSize:14}}>Min. Staking Amount : 10 Gari</SmallText>
   <SmallText style={{fontSize:14}}>Unlock Date : 22/01/2023</SmallText>
   <SmallText style={{fontSize:14}}>APY : 10%</SmallText>
   <StakingButton title={'stake now'}/>
   <SmallText style={{fontSize:10}}>Note : Subsequent staking will reset Lock-in Period</SmallText>
    </View>
  )
}

export default StakingPopup