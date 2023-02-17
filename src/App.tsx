import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from 'react-native-root-siblings';
import MainTabNav from "./navigations/MainTabNav";
import LanguageFilter from "./components/vNFT/LanguageFilter";
import CategoryFilter from "./components/vNFT/CategoryFilter";
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
//1) Filter Based On Language and Category (high priority)
//2) Iframe Loading Screen (high priority)
//3) Site Reliability (high priotity but at last)
//4) React games Reloading (least one)