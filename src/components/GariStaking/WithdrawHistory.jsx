import { Pressable, View, Text ,StyleSheet} from "react-native";
import Container from "../Containers/Container";
import GariIcon from "../GariIcon";
import PrimaryText from "../Typology/PrimaryText";
import RowBox from "../Containers/InLineContainer";
import SecondaryText from "../Typology/SecondaryText";
import TextIconBox from "../Containers/TextIconBox";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const WithdrawHistory = () => {
  return (
   
        <Container style={{  width: 320 }}>
          <RowBox style={{ width: "90%" }}>
            <View style={{ width: "60%" }}>
           
              <PrimaryText style={{ fontSize: 12 }}><View style={{position:'absolute',left:-18}}><Ionicons name="ios-wallet-outline" size={14} color="white" /></View>Amount Withdrawn</PrimaryText>
              
              <TextIconBox>
                <PrimaryText style={{ fontSize: 16 }}>0.33</PrimaryText>
                <GariIcon size={16} />
              </TextIconBox>
              <SecondaryText style={{ fontSize: 12 }}>$00.24</SecondaryText>
            </View>

            <View
              style={{
                width: "40%",
                textAlign: "right",
                alignSelf: "flex-start",
                marginRight:3
              }}
            >
              <PrimaryText style={{ fontSize: 12 }}><View style={{position:'absolute',left:-12}}><FontAwesome5 name="calendar-alt" size={12} color="white" /></View>Time of Withdrawal</PrimaryText>
              <PrimaryText style={{ fontSize: 14 }}>07-07-21 07:44</PrimaryText>
            </View>
          </RowBox>

          <RowBox style={{ width: "90%" }}>
            <View style={{ width: "60%", alignSelf: "flex-end" }}>
              <PrimaryText style={{ fontSize: 10, textDecoration: "underline" }}>
                View Transaction
              </PrimaryText>
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
        </Container>
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
export default WithdrawHistory;
