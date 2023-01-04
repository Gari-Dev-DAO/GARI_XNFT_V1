import { useState } from "react"
import { View } from "react-native"
import PrimaryText from "../Typology/PrimaryText"
import RoundedIcon from "../RoundedIcon"
import SecondaryText from "../Typology/SecondaryText"
import GradientButton from "../Buttons/GradientButton"
import GariInput from "../GariStaking/GariInput"
import RowBox from "../Containers/InLineContainer"

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
   <PrimaryText style={{fontSize:20,margin:'auto',marginBottom:25,marginTop:10}}>Stake GARI</PrimaryText>
   <SecondaryText style={{fontSize:12,marginLeft:10,lineHeight:14}}>Minimum Lock-In Period : 7 days</SecondaryText>
   <GariInput value={value} setValue={setValue} setError={setError} error={error}/>
   <RowBox style={{width:'100%'}}>
   <SecondaryText style={{color:'red',height:20,fontSize:14}}>{error}</SecondaryText>
   <SecondaryText style={{height:20,fontSize:16,marginRight:10}}>$23</SecondaryText>
   </RowBox>
   <SecondaryText style={{fontSize:14}}>Min. Staking Amount : 10 Gari</SecondaryText>
   <SecondaryText style={{fontSize:14}}>Unlock Date : 22/01/2023</SecondaryText>
   <SecondaryText style={{fontSize:14}}>APY : 10%</SecondaryText>
   <GradientButton title={'Stake Now'} onPress={handleStaking}/>
   <SecondaryText style={{fontSize:10}}>Note : Subsequent staking will reset Lock-in Period</SecondaryText>
    </View>
  )
}

export default StakingPopup