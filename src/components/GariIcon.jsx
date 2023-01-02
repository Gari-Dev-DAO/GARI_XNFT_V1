import { View,Image,StyleSheet } from 'react-native'
import { GariLogo } from '../utils/images'

const GariIcon = ({size}) => {
    return (
          <Image
            source={{uri:GariLogo}}
            fadeDuration={0}
            style={[{ width: size, height: size },styles.img]}
          />
  )
}
const styles=StyleSheet.create({
   img:{
    borderRadius:'50%',
    marginLeft:5,
    marginRight:5
   }
})
export default GariIcon