import { View} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import StakingButton from "./StakingButton"

const ErrorPopup = ({setVisible}) => {
    const nav=useNavigation()
    
    const handleSuccess=()=>{
        nav.navigate("Stake")
        setVisible(false)
    }

  return (
    <View style={{display:'flex',alignItems:'center'}}>
    <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:14}}>Encountered Some </Heading>
   <Heading style={{fontSize:14}}>Issues</Heading>
   <StakingButton title={'Retry'} onPress={handleSuccess}/>
    </View>
  )
}

export default ErrorPopup