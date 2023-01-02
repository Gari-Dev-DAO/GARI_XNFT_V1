import Box from "./Box"
import SmallText from "./SmallText"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import DetailTooltip from "./Tooltip"
import TextIconBox from "./TextIconBox"
import GariIcon from "./GariIcon"

const EarningBox = () => {
  return (
    <Box>
    <RoundedIcon dimension={42}></RoundedIcon>
    <SmallText style={{fontSize:12}}>Status : Not Earning <DetailTooltip text={'not earning'}/></SmallText>  
    <Heading style={{fontSize:16}}>Total Rewards Earned <DetailTooltip text={'total reaward got'}/></Heading>
    <TextIconBox>
    <Heading style={{fontSize:20}}>3.24</Heading>
     <GariIcon size={20}/>
    </TextIconBox>
    <SmallText style={{fontSize:14}}>$1.56</SmallText>  
   
   </Box>
  )
}

export default EarningBox