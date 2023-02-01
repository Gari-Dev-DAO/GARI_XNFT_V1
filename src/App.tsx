import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNav from "./navigations/MainDrawerNav";
import StakingTabNav from "./navigations/StakingTabNav";
import PandaStaking from "./screens/PandaStaking";

import { LinearGradient } from "expo-linear-gradient";
import GameStackNav from "./navigations/GamesStackNav";
import GameIframe from "./screens/GameIframe";
import ConnectionPoc from "./screens/ConnectionPoc";

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
       {/* <MainDrawerNav/>  */}
        {/* <StakingTabNav/> */}
        {/* <PandaStaking/> */}
       {/* <GameStackNav/> */}
       <ConnectionPoc/>
      </NavigationContainer> 
    </RecoilRoot>
  );
}


export default registerRootComponent(App);
