import { ScrollView, Dimensions } from "react-native"
import GradientButton from "../Buttons/GradientButton"

const Games = () => {
  return (
    <ScrollView
            contentContainerStyle={{
                backgroundColor: "#8c067d",
                paddingTop: 20,
                minHeight: Dimensions.get("screen").height-20,
            }}
        >
            <GradientButton  title='Start Betting'/>
            <GradientButton  title='End Betting'/>
        </ScrollView>

  )
}

export default Games