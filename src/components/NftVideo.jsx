import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const NftVideo = ({url,poster}) => {
 
  return (
       <Video
        source={{
          uri: url,
        }}
        posterSource={{uri:poster}}
        posterStyle={{width:'100%',height:'100%',zIndex:1}}
        style={styles.video}
        useNativeControls
        resizeMode='contain'
        isLooping
        onReadyForDisplay={videoData => {
          videoData.path[0].style.position = "initial"
          videoData.path[0].style.zIndex = 2
        }}
       usePoster
      testID='video' />
  )
}
const styles=StyleSheet.create({
 video:{
   height:'90%',
   width:'100%',
   borderRadius:10,
 }
})
export default NftVideo

//https://stackoverflow.com/questions/63322672/what-is-the-best-way-to-indicate-loading-while-a-video-is-loading-on-expo-react
// customising video rendering system means just showing custum loading there.