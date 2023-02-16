import { ScrollView ,Dimensions} from "react-native"
import { useNavigation } from "@react-navigation/native"
import GradientButton from "../components/Buttons/GradientButton"
import ScreenConatainer from "../components/gradients/ScreenConatiner"

const AdminPanel = () => {
    const nav=useNavigation()

   const navigateToAddGame=()=>{
    nav.push('add-game')
   }

   const navigateToStartGame=()=>{
    nav.push('start-game')
   }

    return (
        <ScrollView
            contentContainerStyle={{
                minHeight: Dimensions.get("screen").height,
            }}
        >
    <ScreenConatainer>
    <GradientButton onPress={navigateToAddGame} title='Add Games'/>   
    <GradientButton onPress={navigateToStartGame} title='Start/End Games'/>   
    </ScreenConatainer>
    </ScrollView>
    )
}

export default AdminPanel