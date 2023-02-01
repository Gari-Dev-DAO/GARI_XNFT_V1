import { View } from "react-native"
import { useState } from "react"
import PrimaryText from "../Typology/PrimaryText"
import RoundedIcon from "../RoundedIcon"
import SecondaryText from "../Typology/SecondaryText"
import GradientButton from "../Buttons/GradientButton"
import GariInput from "../GariStaking/GariInput"
import RowBox from "../Containers/InLineContainer"

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
   <PrimaryText style={{fontSize:20,margin:'auto',marginBottom:25,marginTop:10}}>UnStake GARI</PrimaryText>
   <GariInput value={value} setValue={setValue} setError={setError} error={error}/>
   <RowBox style={{width:'100%'}}>
   <SecondaryText style={{color:'red',height:20,fontSize:14}}>{error}</SecondaryText>
   <SecondaryText style={{height:20,fontSize:16,marginRight:10}}>$23</SecondaryText>
   </RowBox>
   <SecondaryText style={{fontSize:14,margin:'auto',marginTop:10,marginBottom:20}}>Min. UnStaking Amount : 10 Gari</SecondaryText>
   <GradientButton title={'Unstake Now'} onPress={handleUnstaking}/>
    </View>
  )
}

export default UnStakingPopup
