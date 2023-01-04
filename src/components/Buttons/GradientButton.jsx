import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ onPress, title }) => {
  return (
    <LinearGradient colors={["#CF385C", "#F06F6C"]} style={styles.rounded}>
      <Pressable onPress={onPress} style={styles.btn}>
        <Text style={styles.font}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  btn: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  font: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  rounded: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 5,
    margin:'auto',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 20
  },
});
export default GradientButton;
