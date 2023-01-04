import {useNavigation } from "@react-navigation/native";
import Button from "../Buttons/Button";

const DetailButton = ({ nft }) => {
  const navigation = useNavigation();
  const navigateToNft = () => {
    navigation.navigate("Nft", { nft });
  };
  return (
  <Button onPress={navigateToNft} title="Detail"/>
  )
};

export default DetailButton;
