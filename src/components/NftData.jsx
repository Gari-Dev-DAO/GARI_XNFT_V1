import Box from "./Box";
import Heading from "./Heading";
import SmallText from "./SmallText";

const NftData = ({ nft={} }) => {
  const {name,creator_user_id,description}=nft;

  return (
     <Box>
      <Heading style={{fontSize:14}}>{name}</Heading>
       <Heading style={{fontSize:16, alignSelf:'flex-start'}}>Disciption</Heading>
      <SmallText style={{fontSize:12}}>{description}</SmallText>
    </Box>
  );
};

 
export default NftData;
