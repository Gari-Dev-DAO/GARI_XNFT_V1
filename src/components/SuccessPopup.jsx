import { View} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Heading from "./Heading"
import RoundedIcon from "./RoundedIcon"
import StakingButton from "./StakingButton"

const SuccessPopup = ({setVisible}) => {
    const nav=useNavigation()
    
    const handleSuccess=()=>{
        nav.navigate("History")
        setVisible(false)
    }

  return (
    <View style={{display:'flex',alignItems:'center'}}>
   <Heading style={{fontSize:20}}>Transaction</Heading>
   <Heading style={{fontSize:20,marginBottom:25}}>Successfully Initiated</Heading>
    <RoundedIcon dimension={52}/>
   <Heading style={{fontSize:14,lineHeight:18,marginTop:15}}>Please check the status in the </Heading>
   <Heading style={{fontSize:14,lineHeight:18}}>History Section</Heading>
   <StakingButton title={'Continue'} onPress={handleSuccess}/>
    </View>
  )
}

export default SuccessPopup