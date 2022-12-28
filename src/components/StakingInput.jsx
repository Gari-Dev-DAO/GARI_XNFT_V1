import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const StakingInput = () => {
  const [gari, setGari] = useState("");
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        value={gari}
        onChangeText={(text) => setGari(text.replace(/[^0-9,.]/g, ""))}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height:56,
    backgroundColor:'#000000',
    borderRadius:5
  },
  input: {
    height: "90%",
    width: "60%",
    color: "#FFFFFF",
    backgroundColor:'#000000',
    fontSize:24,
    fontWeight:500,
    borderWidth:0,
    textAlign:'right',
    padding:10
  },
});

export default StakingInput;
