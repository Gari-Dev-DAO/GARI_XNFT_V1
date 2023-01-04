import { StyleSheet, Text, View } from "react-native";
import { Badge } from "react-native-paper";
import Hoverable from "./Hoverable";
import PrimaryText from "./Typology/PrimaryText";

const DetailBadge = ({ style ,detail}) => {
  return (
    <View style={{zIndex:50}}>
      <Hoverable>
        {(isHovered) => (
          <View>
            <View
              style={[
                {
                  display: "none",
                  top: -10,
                  width: 180,
                  backgroundColor: "black",
                  padding: 5,
                  borderRadius: 10,
                  zIndex: 2000,
                  elevation: 600,
                  position: "absolute",
                },
                isHovered && { display: "flex" },
                { left: style?.left },
              ]}
            >
              <PrimaryText style={{ fontSize: 8, lineHeight: 10,margin:'auto' }}>
               {detail}
              </PrimaryText>
            </View>
            <Badge style={styles.badge} size={8}>
              <Text style={{ fontSize: 6 }}> i</Text>
            </Badge>
          </View>
        )}
      </Hoverable>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 5,
    left: 1,
    color: "#FFFFFF",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DetailBadge;
