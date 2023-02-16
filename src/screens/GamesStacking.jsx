import { useEffect, useState } from "react"
import { ScrollView, Dimensions, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";
import StakeonGame from "../components/GamesStaking/StakeOnGame";
import GradientButton from "../components/Buttons/GradientButton";
import OverLay from "../components/OverLay";
import { usePublicKey } from "../hooks/xnftConnection/hooks";
import { getLiveGame, getPlayer } from "../services/GameDBApis";
import Loading from "../components/Loading";
import PlayGame from "../components/GamesStaking/PlayGame";
import ScreenConatainer from "../components/gradients/ScreenConatiner";
import PrimaryText from "../components/Typology/PrimaryText";
import Toast from 'react-native-root-toast';




const GameStaking = ({ route }) => {
  const nav = useNavigation()
  const { gameUrl, gameID } = route.params;
  const publicKey = usePublicKey()
  const [isBetted, setIsBetted] = useState(false) //get from api 
  const [isLoading, setLoading] = useState(true)


  const getUserBettingData = async () => {
    setLoading(true)
    const gameInstanceID = await getLiveGame({ gameID })
    if (!gameInstanceID || gameInstanceID == 'error') {
      Toast.show('Something get Wrong!!.', {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      });
      setLoading(false)
      return
    }
    const player = await getPlayer({ publicKey, gameID, gameInstanceID })
    if (player && player != 'error' && player.msg != "Player Not Found") { setIsBetted(true) }
    else if (!player || player == 'error') {
      Toast.show('Something get Wrong!!.', {
        duration: Toast.durations.LONG,
        backgroundColor: 'red'
      });
    }
    setLoading(false)
  }

  useEffect(() => {
    if (publicKey)
      getUserBettingData()
  }, [publicKey])

  const [isOverLayVisible, setOverLayVisible] = useState(true)
  const [navigateToOther, setNavigateToOther] = useState(false)

  const navigateToGameIframe = () => {
    nav.push("gameiframe", { gameUrl, free: false })
    setNavigateToOther(true)
    setOverLayVisible(false)
  }

  useEffect(() => {
    if (!isOverLayVisible && !navigateToOther)
      nav.push('games')
  }, [isOverLayVisible])


  return (
    <ScrollView
      contentContainerStyle={{ minHeight: Dimensions.get('screen').height }}
    >
      <ScreenConatainer>
        {isLoading && <Loading />}
      { !isOverLayVisible && !Loading && <PrimaryText style={{ margin: 'auto', fontSize: 22, fontWeight: 800 }}>Thanks For Playing The Game</PrimaryText> }
        <OverLay visible={isOverLayVisible && !isBetted && !isLoading} setVisible={setOverLayVisible}><StakeonGame setIsBetted={setIsBetted} setLoading={setLoading} gameID={gameID} /> </OverLay>
        <OverLay visible={!isLoading && isBetted && isOverLayVisible} setVisible={setOverLayVisible}>
          <PlayGame navigateToGameIframe={() => navigateToGameIframe()} />
        </OverLay>
      </ScreenConatainer>
    </ScrollView>
  )
}


export default GameStaking
