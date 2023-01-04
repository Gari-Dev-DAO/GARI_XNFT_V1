import { useEffect, useState } from "react";
import { ScrollView, Dimensions, Text, View,Image} from "react-native";
import { getNftsByWallet } from "../services/moralisApis";
import { getArweaveData } from "../services/arweaveApis";
import { getNFTMetadata } from "../services/moralisApis";
import PrimaryText from "../components/Typology/PrimaryText";
import ResponsiveContainer from "../components/Containers/ResponsiveContainer";

const PandaStaking = () => {
  const [nfts, setNfts] = useState([]);
  const [metaNfts, setMetaNfts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const walletAddress = "gVReRcymNis8w5DNmcQsDxdUPG9GGGu6ztv5PfDq3Xe";
    //   const walletAddress = "7ULtoqjx49uQEQ9k8rAhsekodNGQSUATWABCYGKPXp3r";
      const nfts = await getNftsByWallet(walletAddress);
      setNfts(nfts);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const metaNfts = nfts?.map(async (nft) => {
        const { mint: mintAddress } = nft;
        const metaData = await getNFTMetadata(mintAddress);
        const { metadataUri } = metaData?.metaplex ? metaData.metaplex : {};
        // return metadataUri;
        const arweaveData= await getArweaveData(metadataUri)
        return arweaveData;
        // return mintAddress;
      });

      {
        const nfts = await Promise.all(metaNfts);
        setMetaNfts(nfts);
      }
    };
    getData();
  }, [nfts]);

  console.log(metaNfts);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#8c067d",
        paddingTop: 20,
        minHeight: Dimensions.get("screen").height,
      }}
    >
      <PrimaryText style={{ fontSize: 24,margin:'auto' }}>All Nfts Owned</PrimaryText>
      <ResponsiveContainer style={{justifyContent:'center'}}>
      {metaNfts?.map((nft, index) => {
        if (nft){
        const {name,image}=nft;
          return (
            <View key={index} style={{display:'flex',alignItems:'center',marginBottom:10,marginLeft:10,marginRight:10}}>
            <Image style={{width:220,height:300,borderRadius:10,marginTop:20,marginBottom:20}}
        source={{
          uri: image,
        }}
      />
              <PrimaryText>{name}</PrimaryText>
            </View>
          );}
      })}
      </ResponsiveContainer>
    </ScrollView>
  );
};

export default PandaStaking;
