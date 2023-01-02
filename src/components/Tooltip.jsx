import { Tooltip } from "@rneui/themed";
import { useState } from "react";
import { Text } from "react-native";
import DetailBadge from "./Badge";

const DetailTooltip = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      popover={<Text>{text}</Text>}
      containerStyle={{position:'relative'}}
    >
     <DetailBadge/>
    </Tooltip>
  );
};

export default DetailTooltip;
