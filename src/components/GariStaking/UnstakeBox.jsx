import { useState } from "react"
import Container from "../Containers/Container"
import PrimaryText from "../Typology/PrimaryText"
import OverLay from "../OverLay"
import SecondaryText from "../Typology/SecondaryText"
import GradientButton from "../Buttons/GradientButton"
import RoundedIcon from "../RoundedIcon"
import UnStakingPopup from "../OverLayPopUps/UnStakingPopup"
import SuccessPopup from "../OverLayPopUps/SuccessPopup"
import GariIcon from "../GariIcon"
import TextIconBox from "../Containers/TextIconBox"


const UnstakeBox = () => {
const [visible,setVisible]=useState(false)
const [stakingSuccess,setStakingSuccess]=useState(false)
  return (
    <Container>
    <RoundedIcon dimension={42}></RoundedIcon> 
    <PrimaryText style={{fontSize:16}}>Ready To Unstake</PrimaryText>
    <TextIconBox>
    <PrimaryText style={{fontSize:20}}>356.24</PrimaryText>
     <GariIcon size={20}/>
     </TextIconBox>
    <SecondaryText style={{fontSize:14}}>$278.45</SecondaryText>
    <GradientButton title={'Unstake'} onPress={()=>setVisible(true)} />
    <OverLay visible={visible} setVisible={setVisible} ><UnStakingPopup setVisible={setVisible} setStakingSuccess={setStakingSuccess}/></OverLay>
    <OverLay visible={stakingSuccess} setVisible={setStakingSuccess}> <SuccessPopup setVisible={setStakingSuccess}/> </OverLay>
   </Container>
  )
}

export default UnstakeBox