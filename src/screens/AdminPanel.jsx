import { ScrollView ,Dimensions} from "react-native"
import { useNavigation } from "@react-navigation/native"
import GradientButton from "../components/Buttons/GradientButton"

const AdminPanel = () => {
    const nav=useNavigation()
   const navigateToGames=()=>{
    nav.push('games')
   }
    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: "#8c067d",
                paddingTop: 20,
                minHeight: Dimensions.get("screen").height-20,
            }}
        >
            <GradientButton onPress={navigateToGames} title='Games'/>
             
        </ScrollView>
    )
}

export default AdminPanel