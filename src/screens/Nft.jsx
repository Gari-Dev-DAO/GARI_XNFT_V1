import {StyleSheet,SafeAreaView,View} from "react-native";
import ResponsiveBox from "../components/ResponsiveBox";
import NftVideo from "../components/NftVideo";
import Traits from "../components/Traits";
import NftData from "../components/NftData";

const Nft = ({route={}}) => {
 const {nft}=route?.params?route.params:{}
  return (
    <SafeAreaView style={styles.nftContainer}>
    <ResponsiveBox style={{justifyContent:'space-around'}}>
    <View style={{height:window.innerHeight-40,width:300}}>
    <NftVideo url={nft?.animation_url}/>
    </View>
    <View>
     <NftData nft={nft}/>
     <Traits attributes={nft?.attributes}/>
     </View>
    </ResponsiveBox>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  nftContainer:{
   flex:1,
   backgroundColor:'#8c067d',
  }})
export default Nft;
