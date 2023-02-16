import { View ,StyleSheet} from "react-native"
import NftVideo from "./NftVideo"
import DetailButton from "./DetailButton"

const HomeVideoContainer = ({item}) => {
  return (
    <View style={styles.videoContainer} testID='videoContainer'>
    <NftVideo url={item?.animation_url} poster={item?.image}/>
    <DetailButton nft={item}/>
    </View>
  )
}

const styles=StyleSheet.create({
    videoContainer:{
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
     width:300,
     height:500,
     gap:15,
     marginBottom:15
    }
  })
  
export default HomeVideoContainer