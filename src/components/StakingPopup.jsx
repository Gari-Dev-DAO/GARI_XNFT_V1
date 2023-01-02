import { useState } from "react"
import { View } from "react-native"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import StakingInput from "./StakingInput"
import RowBox from "./RowBox"

const StakingPopup = ({setVisible,setStakingSuccess}) => {

  const [value,setValue]=useState('10')
  const [error,setError]=useState('')

  const handleStaking=()=>{
    alert(value)
    setVisible(false)
    setStakingSuccess(true)
  }

  return (
    <View style={{display:'flex'}}>
   <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:20,margin:'auto',marginBottom:25,marginTop:10}}>Stake GARI</Heading>
   <SmallText style={{fontSize:12,marginLeft:10,lineHeight:14}}>Minimum Lock-In Period : 7 days</SmallText>
   <StakingInput value={value} setValue={setValue} setError={setError} error={error}/>
   <RowBox style={{width:'100%'}}>
   <SmallText style={{color:'red',height:20,fontSize:14}}>{error}</SmallText>
   <SmallText style={{height:20,fontSize:16,marginRight:10}}>$23</SmallText>
   </RowBox>
   <SmallText style={{fontSize:14}}>Min. Staking Amount : 10 Gari</SmallText>
   <SmallText style={{fontSize:14}}>Unlock Date : 22/01/2023</SmallText>
   <SmallText style={{fontSize:14}}>APY : 10%</SmallText>
   <StakingButton title={'Stake Now'} onPress={handleStaking}/>
   <SmallText style={{fontSize:10}}>Note : Subsequent staking will reset Lock-in Period</SmallText>
    </View>
  )
}

export default StakingPopup