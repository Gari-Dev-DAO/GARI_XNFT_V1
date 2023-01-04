import Container from '../Containers/Container'
import PrimaryText from '../Typology/PrimaryText'
import RoundedIcon from '../RoundedIcon'
import SecondaryText from '../Typology/SecondaryText'
import GariIcon from '../GariIcon'
import TextIconBox from '../Containers/TextIconBox'

const StakedData = () => {
  return (
    <Container>
    <RoundedIcon dimension={42}></RoundedIcon>
    <PrimaryText style={{fontSize:14}}>My GARI staked</PrimaryText>
    <TextIconBox>
    <PrimaryText style={{fontSize:18}}>365.24</PrimaryText>
    <GariIcon size={20}/>
    </TextIconBox>
    <SecondaryText style={{fontSize:14}}>$278.25</SecondaryText>  
   </Container>
  )
}

export default StakedData