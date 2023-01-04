import {ScrollView,Dimensions, Pressable} from "react-native";
import { useState } from "react";
import ResponsiveFlatList from "../components/ResponsiveFlatList";
import StakingHistory from "../components/GariStaking/StakingHistory";
import RowBox from "../components/Containers/InLineContainer";
import WithdrawHistory from "../components/GariStaking/WithdrawHistory";
import GradientButton from "../components/Buttons/GradientButton";

const History = () => {
  const data=new Array(20)
  const renderWithdrawn = ({ item }) => {
    return <WithdrawHistory/>;
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
       <GradientButton onPress={()=>setRender(true)}  title='Staking' />
       <GradientButton onPress={()=>setRender(false)} title='Withdrawn'/>
       </RowBox>
      {render?<ResponsiveFlatList data={data} renderItem={renderStaking}/>:
       <ResponsiveFlatList data={data} renderItem={renderWithdrawn}/> }
      </ScrollView>
      </ScrollView>
  );
};

export default History;
