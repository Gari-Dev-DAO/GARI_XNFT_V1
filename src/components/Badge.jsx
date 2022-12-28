import { Badge } from "@rneui/themed";

const DetailBadge = () => {
  return (
    <Badge
      status="primary"
      containerStyle={{ position: "absolute", bottom:5 ,left:1 }}
      badgeStyle={{backgroundColor:'#b0acb0'}}
    />
  );
};

export default DetailBadge;
