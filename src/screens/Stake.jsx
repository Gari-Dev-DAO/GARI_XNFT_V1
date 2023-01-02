import ResponsiveBox from '../components/ResponsiveBox'
import UnstakeBox from '../components/Unstake'
import StakeBox from '../components/Stake'
import EarningBox from '../components/EarningBox'
import Staked from '../components/Staked'
import { ScrollView ,Dimensions} from 'react-native'


const Stake = () => {


  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
  >
  <ResponsiveBox style={{backgroundColor:'#8c067d',justifyContent:'space-around'}}>
     <StakeBox/>
     <Staked/>
     <EarningBox/>
     <UnstakeBox/>
  </ResponsiveBox>
  </ScrollView>
  )
}

export default Stake

//use react native paper for badges 