import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from 'react-native-root-siblings';
import MainTabNav from "./navigations/MainTabNav";
import Poc from "./screens/POC";
import GameStackNav from "./navigations/GamesStackNav";

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootSiblingParent>
        <MainTabNav/>
       </RootSiblingParent>
      </NavigationContainer> 
    </RecoilRoot>
  );
}

export default registerRootComponent(App);


//TODO 

//4) React games Loading 
//5) Program Integration
//6) Making Game Look Good and Test Interface