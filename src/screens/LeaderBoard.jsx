import { useEffect, useState } from "react";
import { FlatList, View, Pressable, StyleSheet,Dimensions } from "react-native";
import ModalBox from "../components/ModalBox";
import RankPopup from "../components/RankPopup";
import RoundedIcon from "../components/RoundedIcon";
import Score from "../components/Score";

const LeaderBoard = () => {
  

  const data = new Array(20)
  const [visible,setVisible]=useState(false)

  const renderItem = () => {
    return <Score />;
  };

 const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#FFFFFF",
          margin:'auto'
        }}
      />
    );
  }

  return (
   
      <View style={{display:'flex',width:'100%',backgroundColor:'#8c067d',alignItems:'center',minHeight:Dimensions.get('screen').height}}>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          style={[styles.list,{height:500}]}
          contentContainerStyle={{padding:25,width:'100%' }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent = { FlatListItemSeparator }
        />

       <Pressable  onPress={()=>setVisible(!visible)}    style={[styles.fixedBtn,visible&&{display:'none'}]}>
          <RoundedIcon dimension={72} />
       </Pressable>
       
         <ModalBox visible={visible} setVisible={setVisible} style={{top:400}}><RankPopup/></ModalBox>
       
      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    position: "relative",
    display:'flex',
    alignItems:'center',
    flex:1,
    width:300
  },

  fixedBtn: {
    position: "absolute",
    top: 450,
    right: -20,
    zIndex: 80,
  },
  list: {
    display: "flex",
    backgroundColor: "black",
    width:'95%',
    position: "absolute",
    top: 40,
    // height: windowHeight - 50,
    borderRadius:15,
  }
});
export default LeaderBoard;
