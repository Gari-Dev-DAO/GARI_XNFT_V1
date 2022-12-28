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

const StakeBox = () => {
const [visible,setVisible]=useState(false)
  return (
    <Box style={{marginBottom:30,marginTop:20}}>
        <RoundedIcon dimension={52}></RoundedIcon>
        <Heading style={{fontSize:16}}>GARI Pool </Heading>
        <ResponsiveBox style={{width:220,justifyContent:'space-between',alignItems:'flex-start'}}>
        <View>
        <Heading style={{fontSize:12}}>Total Value Locked <DetailTooltip text={'total value locked'}/> </Heading>
        <Heading style={{fontSize:16}}>5364537.9</Heading>
        <SmallText style={{fontSize:14}}>$2788.25</SmallText> 
        </View>
        <View>
        <Heading style={{fontSize:12}}>APY <DetailTooltip text={'apy is the apy'}/> </Heading>
        <Heading style={{fontSize:12}}>10.1%</Heading>
        </View>
        </ResponsiveBox>
        <StakingButton title={'Stake'} onPress={()=>setVisible(true)} />
        <Heading style={{fontSize:10}}>How to Stake</Heading>
        <OverLay visible={visible} setVisible={setVisible} ><StakingPopup/></OverLay>
    </Box>

  )
}

export default StakeBox