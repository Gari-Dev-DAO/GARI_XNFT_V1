import PrimaryText from "../Typology/PrimaryText";
import SecondaryText from "../Typology/SecondaryText";
import { View } from "react-native";
import { Linking} from 'react-native'
import GameBtn from "../gradients/GameBtn";

const NftData = ({ nft={} }) => {
  const {name,creator_user_id,description,mintAddress,metadataUri}=nft;
  console.log(metadataUri)

  return (
     <View style={{width:320,display:'flex',gap:7,marginBottom:16}}>
      <PrimaryText style={{fontSize:18,color:'green'}}>{name}</PrimaryText>
       <PrimaryText style={{fontSize:20, alignSelf:'flex-start',color:'yellow'}}>Disciption</PrimaryText>
      <SecondaryText style={{fontSize:16}}>{description}</SecondaryText>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:10,padding:10}}>
      <GameBtn onPress={()=>Linking.openURL(`https://explorer.solana.com/address/${mintAddress}`) } title='View on Solana Explorer'/>
      <GameBtn onPress={()=>Linking.openURL(`${metadataUri}`) } title='View on Arweave'/>
      </View>
    </View>
  );
};

 
export default NftData;
