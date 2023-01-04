import Container from "../Containers/Container";
import PrimaryText from "../Typology/PrimaryText";
import SecondaryText from "../Typology/SecondaryText";

const NftData = ({ nft={} }) => {
  const {name,creator_user_id,description}=nft;

  return (
     <Container>
      <PrimaryText style={{fontSize:14}}>{name}</PrimaryText>
       <PrimaryText style={{fontSize:16, alignSelf:'flex-start'}}>Disciption</PrimaryText>
      <SecondaryText style={{fontSize:12}}>{description}</SecondaryText>
    </Container>
  );
};

 
export default NftData;
