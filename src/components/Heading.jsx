import { Text, StyleSheet } from "react-native";

const Heading = ({ children,style }) => {
  return <Text style={[styles.heading,style]} testID='heading'>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight:500,
    color:"#FFFFFF",
    lineHeight:20
  },
});
export default Heading;
