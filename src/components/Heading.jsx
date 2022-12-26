import { Text, StyleSheet } from "react-native";

const Heading = ({ children,fontSize }) => {
  return <Text style={[styles.heading,{fontSize:fontSize}]} testID='heading'> {children} </Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight:500,
    color:"#FFFFFF",
    lineHeight:20
  },
});
export default Heading;
