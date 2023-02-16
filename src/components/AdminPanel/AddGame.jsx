import { useState } from "react"
import { ScrollView, Dimensions, View, StyleSheet, Pressable } from "react-native"
import { TextInput } from "react-native-paper"
import { addNewGame } from "../../services/GameDBApis"
import GradientButton from "../Buttons/GradientButton"
import Loading from "../Loading"
import Toast from 'react-native-root-toast';
import ScreenConatainer from "../gradients/ScreenConatiner";
import { Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import PrimaryText from "../Typology/PrimaryText"

const AddGame = () => {
  const [gameUrl, setUrl] = useState(null)
  const [gameName, setGameName] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [gameImage, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const addGame = async () => {
    if (!gameName || !gameUrl || !gameImage)
      {
        Toast.show(`Fill All Fields`, {
          duration: Toast.durations.LONG,
          backgroundColor: 'yellow'
        })
        return
      }
    setIsLoading(true)
    const game = await addNewGame({ gameName, gameUrl,gameImage })
    if (game && game != 'error') {
      Toast.show(`Game added with Id ${game?.gameID}`, {
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
    console.log(gameName)
    console.log(gameUrl)
    setImage(null)
    setUrl(null)
    setGameName(null)
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
          <Pressable
            onPress={pickImage}
          >
            {gameImage && <Image source={{ uri: gameImage }} style={{ width: 240, height: 300 , margin:'auto'}} />}
            <PrimaryText style={{margin:'auto'}}>Upload Game Image</PrimaryText>
          </Pressable>
          <TextInput placeholder="game name" value={gameName} onChangeText={text => setGameName(text)} />
          <TextInput placeholder="game url" value={gameUrl} onChangeText={text => setUrl(text)} />
          <GradientButton title='Add Game' onPress={addGame} />
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



export default AddGame