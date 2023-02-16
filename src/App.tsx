import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import StakingTabNav from "./navigations/StakingTabNav";
import PandaStaking from "./screens/PandaStaking";
import GameStackNav from "./navigations/GamesStackNav";
 import ConnectionPoc from "./screens/ConnectionPoc";
import AdminPanel from "./screens/AdminPanel";
import AdminStackNav from "./navigations/AdminStackNav";
import { RootSiblingParent } from 'react-native-root-siblings';
import HomeStackNav from "./navigations/HomeStackNav";
import MainTabNav from "./navigations/MainTabNav";
function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootSiblingParent>
    {/* <MainDrawerNav/>    */}
         {/* <StakingTabNav/>
        <PandaStaking/>  
       
        // <ConnectionPoc/>
        */}
        {/* <GameStackNav/>  */}
        {/* <AdminStackNav/> */}
        {/* <ConnectionPoc/> */}
        {/* <HomeStackNav/> */}
        <MainTabNav/>
       </RootSiblingParent>
      </NavigationContainer> 
    </RecoilRoot>
  );
}


export default registerRootComponent(App);
//start game , end game , bet on game (fetch user data if betted than direcly to play)
//game loading while data fetching via db 