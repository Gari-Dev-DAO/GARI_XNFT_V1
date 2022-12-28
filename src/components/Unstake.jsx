import { useState } from "react"
import Box from "./Box"
import Heading from "./Heading"
import OverLay from "./OverLay"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import RoundedIcon from "./RoundedIcon"
import UnStakingPopup from "./UnStakingPopup"

const UnstakeBox = () => {
const [visible,setVisible]=useState(false)
  return (
    <Box>
    <RoundedIcon dimension={42}></RoundedIcon> 
    <Heading style={{fontSize:16}}>Ready To Unstake</Heading>
    <Heading style={{fontSize:20}}>356.24</Heading>
    <SmallText style={{fontSize:14}}>$278.45</SmallText>
    <StakingButton title={'Unstake'} onPress={()=>setVisible(true)} />
    <OverLay visible={visible} setVisible={setVisible} ><UnStakingPopup/></OverLay>
   </Box>
  )
}

export default UnstakeBox