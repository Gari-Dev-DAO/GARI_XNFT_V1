import { LinearGradient } from "expo-linear-gradient"

const PopUpCtnr = ({ children }) => {
  return (
    <LinearGradient colors={['#615f67', '#2b2626']} locations={[0, 0.76]} start={{ x: 0.7, y: 0.2}} style={{ padding: 16, borderRadius: 20, height: '100%', width: '100%' }}>
      {children}
    </LinearGradient>
  )
}

export default PopUpCtnr