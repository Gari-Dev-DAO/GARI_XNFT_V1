import ResponsiveBox from "../components/Containers/ResponsiveContainer";
import UnstakeBox from "../components/GariStaking/UnstakeBox";
import StakeBox from "../components/GariStaking/StakeBox";
import StakingEarning from "../components/GariStaking/StakingEarning";
import StakedData from "../components/GariStaking/StakedData";
import { ScrollView, Dimensions,View } from "react-native";




const Stake = () => {

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#8c067d",
        paddingTop: 20,
        minHeight: Dimensions.get("screen").height,
      }}
    >
     
      <ResponsiveBox
        style={{ backgroundColor: "#8c067d", justifyContent: "space-around" }}
      >
        <StakeBox />
        <StakedData />
        <StakingEarning/>
        <UnstakeBox />
      </ResponsiveBox>
    </ScrollView>
  );
};

export default Stake;

//use react native paper for badges
