import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RowBox from "../components/RowBox";
import Heading from "../components/Heading";

const FAQ = ({ Question, Answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Pressable style={styles.faq} onPress={() => setToggle(!toggle)}>
      <RowBox style={{ width: "100%" }}>
        <Heading style={styles.question}>Q. {Question}</Heading>
        {!toggle ? (
          <AntDesign name="caretdown" size={20} color="#FFFFFF" />
        ) : (
          <AntDesign name="caretup" size={20} color="#FFFFFF" />
        )}
      </RowBox>
      <Heading style={[styles.answer, toggle && { display: "unset" }]}>
        Ans- {Answer}
      </Heading>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  faq: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    marginBottom: 20,
    padding: 10,
    maxWidth: 600,
    width:'90%'
  },
  answer: {
    fontSize: 14,
    marginRight: 10,
    lineHeight: 18,
    width: "88%",
    display: "none",

  },
  question: {
    fontSize: 14,
    marginRight: 10,
    lineHeight: 18,
    width: "88%",
  },
});

export default FAQ;
