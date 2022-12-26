import { View, Image } from "react-native";

const MainLogo = ({ logo }) => {
  return (
    <View >
      <Image
        source={logo}
      />
    </View>
  );
};

export default MainLogo;
