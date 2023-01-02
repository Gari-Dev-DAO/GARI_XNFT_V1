import { StyleSheet,Text } from "react-native";
import { Badge } from "react-native-paper";

const DetailBadge = () => {
  return (
    <Badge style={styles.badge} size={8}>
    <Text style={{fontSize:6}}>  i</Text>
    </Badge>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 5,
    left: 1,
    color:'#FFFFFF',
    backgroundColor:'grey',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
});
export default DetailBadge;
