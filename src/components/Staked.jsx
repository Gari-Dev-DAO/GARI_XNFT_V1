import Box from '../components/Box'
import Heading from '../components/Heading'
import RoundedIcon from '../components/RoundedIcon'
import SmallText from '../components/SmallText'

const Staked = () => {
  return (
    <Box>
    <RoundedIcon dimension={42}></RoundedIcon>
    <Heading style={{fontSize:14}}>My GARI staked</Heading>
    <Heading style={{fontSize:18}}>365.24</Heading>
    <SmallText style={{fontSize:14}}>$278.25</SmallText>  
   </Box>
  )
}

export default Staked