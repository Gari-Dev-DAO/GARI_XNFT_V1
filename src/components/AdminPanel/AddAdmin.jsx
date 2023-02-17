import { useState } from "react"
import { ScrollView, Dimensions, View, StyleSheet} from "react-native"
import { TextInput } from "react-native-paper"
import GradientButton from "../Buttons/GradientButton"
import Loading from "../Loading"
import Toast from 'react-native-root-toast';
import ScreenConatainer from "../gradients/ScreenConatiner";
import { addNewAdmin } from "../../services/GameDBApis"

const AddAdmin = () => {
 
  const [gameAdmin, setAdmin] = useState(null)
  const [isLoading,setIsLoading]=useState(false)


  const addAdmin = async () => {
    if (!gameAdmin)
      {
        Toast.show(`Fill All Fields`, {
          duration: Toast.durations.LONG,
          backgroundColor: 'yellow'
        })
        return
      }
    setIsLoading(true)
    const admin = await addNewAdmin({ gameAdmin })
  
    if (admin && admin != 'error') {
      Toast.show(`Admin added.`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'green'
      }
      )
    }
    else {
      Toast.show('Something get Wrong!!.', {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      });
    }
    console.log(gameAdmin)
   
   
    setIsLoading(false)
  }


  return (
    <ScrollView
      contentContainerStyle={{
        minHeight: Dimensions.get("screen").height,
      }}>
      <ScreenConatainer>
        {
          isLoading && <Loading />
        }
        <View style={styles.form}>
          <TextInput placeholder="Admin PublicKey" value={gameAdmin} onChangeText={text => setAdmin(text)} />
          <GradientButton title='Add Admin' onPress={addAdmin} />
        </View>
      </ScreenConatainer>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    gap: '10px',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:40
  }
})



export default AddAdmin