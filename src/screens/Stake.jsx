import ResponsiveBox from '../components/ResponsiveBox'
import UnstakeBox from '../components/Unstake'
import StakeBox from '../components/Stake'
import EarningBox from '../components/EarningBox'
import Staked from '../components/Staked'
import Heading from '../components/Heading'

const Stake = () => {


  return (
  <ResponsiveBox style={{backgroundColor:'#8c067d',justifyContent:'space-around',minHeight:window.innerHeight}}>
     <StakeBox/>
     <Staked/>
     <EarningBox/>
     <UnstakeBox/>
  </ResponsiveBox>
  )
}

export default Stake