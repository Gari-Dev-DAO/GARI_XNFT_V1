import {StyleSheet,SafeAreaView,View} from "react-native";
import ResponsiveBox from "../components/Containers/ResponsiveContainer";
import NftVideo from "../components/vNFT/NftVideo";
import Traits from "../components/vNFT/Traits";
import NftData from "../components/vNFT/NftData";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import PopUpCtnr from "../components/gradients/PopUpCtnr";

const Nft = ({route={}}) => {
 const {nft}=route?.params?route.params:{}
  return (
    <SafeAreaView style={styles.nftContainer}>
    <ScreenConatainer>
    <ResponsiveBox style={{justifyContent:'space-around',paddingTop:60,paddingBottom:40}}>
    <View style={{height:500,width:300}}>
    <NftVideo url={nft?.animation_url}/>
    </View>
    <View>
      <PopUpCtnr>
     <NftData nft={nft}/>
     <Traits attributes={nft?.attributes}/>
     </PopUpCtnr>
     </View>
    </ResponsiveBox>
    </ScreenConatainer>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  nftContainer:{
   flex:1
  }})
export default Nft;
