import {useEffect } from "react";
import { TextInput, View, StyleSheet} from "react-native";
import GariIcon from "../GariIcon";
import GradientMaxButton from "../Buttons/GradientMaxButton";


const GariInput = ({ value, setValue, setError,error }) => {
  const userBalance = 24;

  
  useEffect(() => {
    const numValue = parseFloat(value);
    if (numValue > userBalance) setError("Not Suffiecient Balance");
    else if (numValue < 10 || !numValue) setError("Min 10 Gari to Stake");
    else setError("");
  }, [value]);


  return (
    <View style={styles.inputBox}>
      <TextInput
        style={[styles.input, error && {borderColor:'red',borderWidth:1.5}]}
        value={value}
        onChangeText={(text) => setValue(text.replace(/[^0-9,.]/g, ""))}
        keyboardType="numeric"
      />
     <GradientMaxButton onPress={()=>{setValue(userBalance)}}/>
     <GariIcon size={40}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 56,
    backgroundColor: "#000000",
    borderRadius: 10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingRight:5,
    marginTop:10,
    marginBottom:5
  },
  input: {
    width: "60%",
    height:'100%',
    color: "#FFFFFF",
    backgroundColor: "#000000",
    fontSize: 24,
    fontWeight: 500,
    borderWidth: 0,
    textAlign: "right",
    padding: 12,
    display:'flex',
    justifyContent:'center',
    marginRight:5,
    outlineStyle:'none',
    borderRadius:10
  }
});

export default GariInput;
