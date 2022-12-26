import {StyleSheet,SafeAreaView} from "react-native";
import ResponsiveBox from "../components/ResponsiveBox";
import NftVideo from "../components/NftVideo";
import Traits from "../components/Traits";
import NftData from "../components/NftData";

const Nft = ({route={}}) => {
 const {nft}=route?.params?route.params:{}
  return (
    <SafeAreaView style={styles.nftContainer}>
      <ResponsiveBox>
    <NftVideo url={nft?.animation_url}/>
     <NftData nft={nft}/>
      <Traits attributes={nft?.attributes}/>
    </ResponsiveBox>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  nftContainer:{
   flex:1,
   backgroundColor:'#eb34cc'
  }})
export default Nft;
