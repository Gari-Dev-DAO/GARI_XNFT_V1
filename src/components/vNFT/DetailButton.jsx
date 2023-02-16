import {useNavigation } from "@react-navigation/native";
import GameBtn from "../gradients/GameBtn";

const DetailButton = ({ nft }) => {
  const navigation = useNavigation();
  const navigateToNft = () => {
    navigation.navigate("Nft", { nft });
  };
  return (
  <GameBtn onPress={navigateToNft} title="Detail"/>
  )
};

export default DetailButton;
