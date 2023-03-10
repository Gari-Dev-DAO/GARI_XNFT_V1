import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Video } from "expo-av";
import { useState } from "react";
import * as React from "react";


const NftVideo = ({ url, poster }) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{width:'100%',height:'90%',position:'relative'}}>
       {/* {loading && <View style={[styles.video,{backgroundColor:'black',zIndex:10}]}> <ActivityIndicator size="large" color="#FFFFFF" /></View>}
        <Video
          source={{
            uri: url,
          }}
          onLoadStart={() => setLoading(true)}
          onLoad={(videoData)=>{setLoading(false)
            videoData.path[0].style.position = "initial";
          }}
          posterSource={{ uri: poster }}
          posterStyle={{ width: "100%", height: "100%", zIndex: 1 }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping
          onReadyForDisplay={(videoData) => {
            videoData.path[0].style.zIndex = 2;
          }}
          usePoster
          testID="video"
        /> */}
        <video  controls style={{height:'450px',width:'280px'}} poster={poster}>
       <source src={url} type="video/mp4"/>
      </video>

        </View>
  );
};

const styles = StyleSheet.create({
  video: {
    flex:1,
    height: "100%",
    width: "100%",
    borderRadius: 10,
    justifyContent:'center',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0
  },
});
export default NftVideo;


