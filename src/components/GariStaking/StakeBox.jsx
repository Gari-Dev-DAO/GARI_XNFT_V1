import { View } from "react-native"
import { useState } from "react"
import Container from "../Containers/Container"
import PrimaryText from "../Typology/PrimaryText"
import OverLay from "../OverLay"
import SecondaryText from "../Typology/SecondaryText"
import GradientButton from "../Buttons/GradientButton"
import RoundedIcon from "../RoundedIcon"
import ResponsiveContainer from "../Containers/ResponsiveContainer"
import StakingPopup from "../OverLayPopUps/StakingPopup"
import SuccessPopup from "../OverLayPopUps/SuccessPopup"
import TextIconBox from "../Containers/TextIconBox"
import GariIcon from "../GariIcon"
import DetailBadge from "../Badge"
import { APY_DETAIL, VALUE_LOCKED_DETAIL } from "../../ConstantTexts/GariStakingTexts"

const StakeBox = () => {
const [visible,setVisible]=useState(false)
const [stakingSuccess,setStakingSuccess]=useState(false)
  return (
    <Container style={{marginBottom:30,marginTop:20}}>
        <RoundedIcon dimension={52}></RoundedIcon>
        <PrimaryText style={{fontSize:16}}>GARI Pool </PrimaryText>
        <ResponsiveContainer style={{width:220,justifyContent:'space-between',alignItems:'flex-start'}}>
        <View>
        <PrimaryText style={{fontSize:12}}>Total Value Locked <DetailBadge style={{left:-100}} detail={VALUE_LOCKED_DETAIL}/> </PrimaryText>
        <TextIconBox>
        <PrimaryText style={{fontSize:16}}>5364537.9</PrimaryText>
        <GariIcon size={16}/>
        </TextIconBox>
        <SecondaryText style={{fontSize:14}}>$2788.25</SecondaryText> 
        </View>
        <View style={{marginRight:5}}>
        <PrimaryText style={{fontSize:12}}>APY <DetailBadge style={{left:-165}} detail={APY_DETAIL}/> </PrimaryText>
        <PrimaryText style={{fontSize:12}}>10.1%</PrimaryText>
        </View>
        </ResponsiveContainer>
        <GradientButton title={'Stake'} onPress={()=>setVisible(true)} />
        <PrimaryText style={{fontSize:10,textDecorationLine: 'underline'}}>How to Stake</PrimaryText>
        <OverLay visible={visible} setVisible={setVisible} ><StakingPopup setVisible={setVisible} setStakingSuccess={setStakingSuccess}/></OverLay>
    <OverLay visible={stakingSuccess} setVisible={setStakingSuccess}> <SuccessPopup setVisible={setStakingSuccess}/> </OverLay>

    </Container>
  )
}

export default StakeBox