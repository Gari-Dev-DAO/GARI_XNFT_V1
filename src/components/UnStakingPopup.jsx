import { View } from "react-native"
import { useState } from "react"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import StakingInput from "./StakingInput"
import RowBox from "./RowBox"

const UnStakingPopup = ({setVisible,setStakingSuccess}) => {
  const [value,setValue]=useState('10')
  const [error,setError]=useState('')
  const handleUnstaking=()=>{
    alert(value)
    setVisible(false)
    setStakingSuccess(true)
  }

  return (
    <View style={{display:'flex'}}>
   <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:20,margin:'auto',marginBottom:25,marginTop:10}}>UnStake GARI</Heading>
   <StakingInput value={value} setValue={setValue} setError={setError} error={error}/>
   <RowBox style={{width:'100%'}}>
   <SmallText style={{color:'red',height:20,fontSize:14}}>{error}</SmallText>
   <SmallText style={{height:20,fontSize:16,marginRight:10}}>$23</SmallText>
   </RowBox>
   <SmallText style={{fontSize:14,margin:'auto',marginTop:10,marginBottom:20}}>Min. UnStaking Amount : 10 Gari</SmallText>
   <StakingButton title={'Unstake Now'} onPress={handleUnstaking}/>
    </View>
  )
}

export default UnStakingPopup

