import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import GradientButton from '../Buttons/GradientButton'
import PrimaryText from '../Typology/PrimaryText'
import RoundedIcon from '../RoundedIcon'
import { BetOnTheGame } from '../../services/GameProgramApis'
import SecondaryText from '../Typology/SecondaryText'
import { createPlayer } from '../../services/GameDBApis'
import { usePublicKey } from '../../hooks/xnft-hooks'

const StakeonGame = ({ setIsBetted }) => {

  const publicKey = usePublicKey()
  const [Error, setError] = useState('')

  const BetToken = async () => {
    if (window.xnft?.publicKey) {
      const status = await BetOnTheGame() //on chain betting
      if (status == 'success') {
       const res= await createPlayer({ walletID: publicKey }) //send data to db
       if(res=='success')
        setIsBetted(true)
        else
        setError('Some Problem With db')
      }
      else if (status == 'error') { setError('Some Problem Occured!') }
    }
    else {
      setError('Plz Wait')
    }
  }

  return (
    <View style={styles.stake} >
      <RoundedIcon dimension={42} />
      <PrimaryText>0.2 SOL</PrimaryText>
      <GradientButton onPress={BetToken} title="Bet" />
      <SecondaryText style={{ color: 'red' }}>{Error}</SecondaryText>
    </View>
  )
}

const styles = StyleSheet.create({
  stake: {
    flex: 1,
    alignItems: "center"
  }
})

export default StakeonGame