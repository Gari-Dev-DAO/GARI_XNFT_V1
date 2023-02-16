import { View, StyleSheet, Text, Image } from 'react-native'
import { useState } from 'react'
import PrimaryText from '../Typology/PrimaryText'
import { BetOnTheGame } from '../../services/GameProgramApis'
import SecondaryText from '../Typology/SecondaryText'
import { addPlayer } from '../../services/GameDBApis'
import { usePublicKey } from '../../hooks/xnft-hooks'
import { getLiveGame } from '../../services/GameDBApis'
import GameBtn from '../gradients/GameBtn'


const StakeonGame = ({ setIsBetted, setLoading, gameID }) => {

  const publicKey = usePublicKey()
  const [Error, setError] = useState('')

  const BetToken = async () => {
    setLoading(true)
    if (publicKey) {
      const status = await BetOnTheGame() //on chain betting
      if (status == 'success') {
        const gameInstanceID = await getLiveGame({ gameID })
        if (gameInstanceID == 'error') {
          Toast.show('Something get Wrong!!.', {
            duration: Toast.durations.LONG,
            backgroundColor: 'red'
          });
          setLoading(false)
          return
        }
        const player = await addPlayer({ publicKey, gameID, gameInstanceID }) //send data to db
        if (player && player != 'error')
          setIsBetted(true)
        else {
          Toast.show('Something get Wrong!!.', {
            duration: Toast.durations.LONG,
            backgroundColor: 'red'
          });
        }
      }
      else if (status == 'error') {
        Toast.show('Something get Wrong!!.', {
          duration: Toast.durations.LONG,
          backgroundColor: 'red'
        });
      }
    }
    else {
      Toast.show('Can not get PubKey!!.', {
        duration: Toast.durations.LONG,
        backgroundColor:'red'
      });
    }
    setLoading(false)
  }

  return (
    <View style={styles.stake} >
      <Image
        source={require('../../../assets/solana.png')}
        style={{ display: 'flex', height: '60px', width: '60px' }}
      />
      <Text style={{ color: 'yellow', fontSize: '20px', fontWeight: '400' }}>0.2 SOL</Text>
      <View>
        <PrimaryText style={{ lineHeight: 16 }}>You're about to</PrimaryText>
        <PrimaryText style={{ lineHeight: 16, margin: 'auto' }}>place a bet</PrimaryText>
      </View>
      <GameBtn onPress={BetToken} title="Place Bet" />
      <SecondaryText style={{ color: 'red' }}>{Error}</SecondaryText>
    </View>
  )
}

const styles = StyleSheet.create({
  stake: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    gap: '20px'
  }
})

export default StakeonGame