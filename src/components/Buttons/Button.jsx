import { Pressable,StyleSheet ,Text} from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button} testID='Button'>
      <Text>{title}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#038cfc",
    padding: 10,
    color: "#FFFFFF",
  },
});
