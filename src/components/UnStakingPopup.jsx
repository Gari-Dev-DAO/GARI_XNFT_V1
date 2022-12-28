import { View } from "react-native"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import StakingInput from "./StakingInput"

const UnStakingPopup = () => {
  return (
    <View style={{display:'flex'}}>
   <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:20,margin:'auto'}}>UnStake Gari</Heading>
   <StakingInput/>
   <SmallText style={{fontSize:14}}>Min. UnStaking Amount : 10 Gari</SmallText>
   <StakingButton title={'Unstake Now'}/>
    </View>
  )
}

export default UnStakingPopup

