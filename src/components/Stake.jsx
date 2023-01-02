import { View } from "react-native"
import { useState } from "react"
import Box from "./Box"
import Heading from "./Heading"
import OverLay from "./OverLay"
import SmallText from "./SmallText"
import StakingButton from "./StakingButton"
import RoundedIcon from "./RoundedIcon"
import ResponsiveBox from "./ResponsiveBox"
import DetailTooltip from "./Tooltip"
import StakingPopup from "./StakingPopup"
import SuccessPopup from "./SuccessPopup"
import TextIconBox from "./TextIconBox"
import GariIcon from "./GariIcon"

const StakeBox = () => {
const [visible,setVisible]=useState(false)
const [stakingSuccess,setStakingSuccess]=useState(false)
  return (
    <Box style={{marginBottom:30,marginTop:20}}>
        <RoundedIcon dimension={52}></RoundedIcon>
        <Heading style={{fontSize:16}}>GARI Pool </Heading>
        <ResponsiveBox style={{width:220,justifyContent:'space-between',alignItems:'flex-start'}}>
        <View>
        <Heading style={{fontSize:12}}>Total Value Locked <DetailTooltip text={'total value locked'}/> </Heading>
        <TextIconBox>
        <Heading style={{fontSize:16}}>5364537.9</Heading>
        <GariIcon size={16}/>
        </TextIconBox>
        <SmallText style={{fontSize:14}}>$2788.25</SmallText> 
        </View>
        <View style={{marginRight:5}}>
        <Heading style={{fontSize:12}}>APY <DetailTooltip text={'apy is the apy'}/> </Heading>
        <Heading style={{fontSize:12}}>10.1%</Heading>
        </View>
        </ResponsiveBox>
        <StakingButton title={'Stake'} onPress={()=>setVisible(true)} />
        <Heading style={{fontSize:10,textDecorationLine: 'underline'}}>How to Stake</Heading>
        <OverLay visible={visible} setVisible={setVisible} ><StakingPopup setVisible={setVisible} setStakingSuccess={setStakingSuccess}/></OverLay>
    <OverLay visible={stakingSuccess} setVisible={setStakingSuccess}> <SuccessPopup setVisible={setStakingSuccess}/> </OverLay>

    </Box>
  )
}

export default StakeBox