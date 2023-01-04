import Container from "../Containers/Container"
import SecondaryText from "../Typology/SecondaryText"
import PrimaryText from "../Typology/PrimaryText"
import RoundedIcon from "../RoundedIcon"
import TextIconBox from "../Containers/TextIconBox"
import GariIcon from "../GariIcon"
import DetailBadge from "../Badge"
import { REWARD_EARNED_DETAIL } from "../../ConstantTexts/GariStakingTexts"

const StakingEarning = () => {
  return (
    <Container>
    <RoundedIcon dimension={42}></RoundedIcon>
    {/* <SecondaryText style={{fontSize:12}}>Status : Not Earning <DetailBadge style={{left:-50}}/></SecondaryText>   */}
    <PrimaryText style={{fontSize:16}}>Total Rewards Earned <DetailBadge style={{left:-145}} detail={REWARD_EARNED_DETAIL} /></PrimaryText>
    <TextIconBox>
    <PrimaryText style={{fontSize:20}}>3.24</PrimaryText>
     <GariIcon size={20}/>
    </TextIconBox>
    <SecondaryText style={{fontSize:14}}>$1.56</SecondaryText>
   </Container>
  )
}

export default StakingEarning