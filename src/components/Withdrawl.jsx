import { Pressable, View, Text ,StyleSheet} from "react-native";
import Box from "../components/Box";
import GariIcon from "../components/GariIcon";
import Heading from "../components/Heading";
import RowBox from "../components/RowBox";
import SmallText from "../components/SmallText";
import TextIconBox from "../components/TextIconBox";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Withdrawal = () => {
  return (
   
        <Box style={{  width: 320 }}>
          <RowBox style={{ width: "90%" }}>
            <View style={{ width: "60%" }}>
           
              <Heading style={{ fontSize: 12 }}><View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View>Amount Withdrawn</Heading>
              
              <TextIconBox>
                <Heading style={{ fontSize: 16 }}>0.33</Heading>
                <GariIcon size={16} />
              </TextIconBox>
              <SmallText style={{ fontSize: 12 }}>$00.24</SmallText>
            </View>

            <View
              style={{
                width: "40%",
                textAlign: "right",
                alignSelf: "flex-start",
                marginRight:3
              }}
            >
              <Heading style={{ fontSize: 12 }}><View style={{position:'absolute',left:-12}}><FontAwesome5 name="calendar-alt" size={12} color="white" /></View>Time of Withdrawal</Heading>
              <Heading style={{ fontSize: 14 }}>07-07-21 07:44</Heading>
            </View>
          </RowBox>

          <RowBox style={{ width: "90%" }}>
            <View style={{ width: "60%", alignSelf: "flex-end" }}>
              <Heading style={{ fontSize: 10, textDecoration: "underline" }}>
                View Transaction
              </Heading>
            </View>

            <View
              style={{
                width: "40%",
                textAlign: "right",
                alignSelf: "flex-start",
                marginRight:3
              }}
            >
              <Pressable style={styles.btn}>
                <Text style={{ fontSize: 14, color: "white"}}>
                  Successful
                </Text>
              </Pressable>
            </View>
          </RowBox>
        </Box>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 15,
    paddingBottom:3,
    paddingTop:1,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 0,
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    margin: "auto",
  },
});
export default Withdrawal;
