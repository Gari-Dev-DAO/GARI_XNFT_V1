import { Pressable,StyleSheet ,Text} from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button} testID='Button'>
      <Text style={{color:'#FFFFFF',fontSize:16}}>
      {title}
      </Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    display:'flex',
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:4,
    paddingBottom:5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.5,
    borderColor:'white'
  },
});
