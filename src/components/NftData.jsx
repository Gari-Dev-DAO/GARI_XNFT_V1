import { View} from "react-native";
import Box from "./Box";
import Heading from "./Heading";
import SmallText from "./SmallText";

const NftData = ({ nft={} }) => {
  const {name,creator_user_id,description}=nft;

  return (
     <Box>
      <Heading fontSize={16}>Creator Id : {creator_user_id}</Heading>
      <SmallText fontSize={12}>{name}</SmallText>
      <View>
       <Heading fontSize={20}>Disciption</Heading>
        <SmallText fontSize={10}>{description}</SmallText>
      </View>
    </Box>
  );
};

 
export default NftData;
