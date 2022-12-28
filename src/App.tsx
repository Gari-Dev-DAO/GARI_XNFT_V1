import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNav from "./navigations/MainDrawerNav";
import StakingTabNav from "./navigations/StakingTabNav";

import { LinearGradient } from "expo-linear-gradient";

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
       <MainDrawerNav/>
      </NavigationContainer>
    </RecoilRoot>
  );
}


export default registerRootComponent(App);
