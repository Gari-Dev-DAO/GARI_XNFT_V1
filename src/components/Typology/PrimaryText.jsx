import { Text, StyleSheet } from "react-native";

const PrimaryText = ({ children,style }) => {
  return <Text style={[styles.heading,style]} testID='heading'>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight:450,
    color:"#FFFFFF",
    position:'relative',
    lineHeight:24
    
  },
});
export default PrimaryText;
