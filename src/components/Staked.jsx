import Box from '../components/Box'
import Heading from '../components/Heading'
import RoundedIcon from '../components/RoundedIcon'
import SmallText from '../components/SmallText'
import GariIcon from './GariIcon'
import TextIconBox from './TextIconBox'

const Staked = () => {
  return (
    <Box>
    <RoundedIcon dimension={42}></RoundedIcon>
    <Heading style={{fontSize:14}}>My GARI staked</Heading>
    <TextIconBox>
    <Heading style={{fontSize:18}}>365.24</Heading>
    <GariIcon size={20}/>
    </TextIconBox>
    <SmallText style={{fontSize:14}}>$278.25</SmallText>  
   </Box>
  )
}

export default Staked