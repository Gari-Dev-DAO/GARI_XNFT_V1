import { useState } from "react"
import Box from "./Box"
import Heading from "./Heading"
import OverLay from "./OverLay"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import RoundedIcon from "./RoundedIcon"
import UnStakingPopup from "./UnStakingPopup"
import SuccessPopup from "./SuccessPopup"
import GariIcon from "./GariIcon"
import TextIconBox from "./TextIconBox"

const UnstakeBox = () => {
const [visible,setVisible]=useState(false)
const [stakingSuccess,setStakingSuccess]=useState(false)
  return (
    <Box>
    <RoundedIcon dimension={42}></RoundedIcon> 
    <Heading style={{fontSize:16}}>Ready To Unstake</Heading>
    <TextIconBox>
    <Heading style={{fontSize:20}}>356.24</Heading>
     <GariIcon size={20}/>
     </TextIconBox>
    <SmallText style={{fontSize:14}}>$278.45</SmallText>
    <StakingButton title={'Unstake'} onPress={()=>setVisible(true)} />
    <OverLay visible={visible} setVisible={setVisible} ><UnStakingPopup setVisible={setVisible} setStakingSuccess={setStakingSuccess}/></OverLay>
    <OverLay visible={stakingSuccess} setVisible={setStakingSuccess}> <SuccessPopup setVisible={setStakingSuccess}/> </OverLay>
   </Box>
  )
}

export default UnstakeBox