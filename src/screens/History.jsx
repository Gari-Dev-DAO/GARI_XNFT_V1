import {ScrollView,Dimensions, Pressable} from "react-native";
import { useState } from "react";
import Withdrawal from "../components/Withdrawl";
import ResponsiveFlatList from "../components/ResponsiveFlatList";
import StakingHistory from "../components/StakingHistory";
import RowBox from "../components/RowBox";
import StakingButton from "../components/StakingButton";

const History = () => {
  const data=new Array(20)
  const renderWithdrawn = ({ item }) => {
    return <Withdrawal/>;
  };

  const renderStaking=({ item }) => {
    return <StakingHistory/>;
  };
 
  const [render,setRender]=useState(true)

  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "#8c067d", paddingTop: 20,minHeight:Dimensions.get('screen').height }}
    >
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <RowBox style={{width:'100%'}}>
       <StakingButton onPress={()=>setRender(true)}  title='Staking'></StakingButton>
       <StakingButton onPress={()=>setRender(false)} title='Withdrawn'></StakingButton>
       </RowBox>
      {render?<ResponsiveFlatList data={data} renderItem={renderStaking}/>:
       <ResponsiveFlatList data={data} renderItem={renderWithdrawn}/> }
      </ScrollView>
      </ScrollView>
  );
};

export default History;
