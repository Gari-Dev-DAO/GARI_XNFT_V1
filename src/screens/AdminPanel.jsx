import { ScrollView ,Dimensions,View} from "react-native"
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
   const navigateToAddAdmin=()=>{
    nav.push('add-admin')
   }

    return (
        <ScrollView
            contentContainerStyle={{
                minHeight: Dimensions.get("screen").height
            }}
        >
    <ScreenConatainer>
    <View style={{paddingTop:70}}>
    <GradientButton onPress={navigateToAddGame} title='Add Games'/>   
    <GradientButton onPress={navigateToStartGame} title='Start/End Games'/>   
    <GradientButton onPress={navigateToAddAdmin} title='Add Admin'/>   
    </View>
    </ScreenConatainer>
    </ScrollView>
    )
}

export default AdminPanel


// "dev": "expo start --web & npx xnft dev --iframe http://localhost:9933",