import { ScrollView ,StyleSheet,Dimensions} from "react-native";
import { Faqs } from "../utils/FAQs";
import FAQ from "../components/GariStaking/FAQ";
import RoundedIcon from "../components/RoundedIcon";
import Heading from "../components/Typology/PrimaryText";

const FAQs = () => {
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
    >
      <ScrollView contentContainerStyle={{flex:1 ,alignItems:'center'}}>
        <RoundedIcon dimension={72} />
        <Heading style={styles.frequentAsked}>
          Frequently Asked Questions
        </Heading>
        {Faqs?.map((FaQ, index) => {
          const { Question, Answer } = FaQ;
          return <FAQ Question={Question} Answer={Answer} key={index} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};
const styles=StyleSheet.create({
    frequentAsked:{
        fontSize: 14, color: "red", margin: "auto" ,marginBottom:20,marginTop:10
    }
})
export default FAQs;
