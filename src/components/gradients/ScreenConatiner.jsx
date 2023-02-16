import { LinearGradient } from "expo-linear-gradient"

const ScreenConatainer = ({ children }) => {
    return (
        <LinearGradient colors={['#ca12e6', '#3711f6', '#d018cf']} locations={[0, 0.29, 0.96]} start={{ x: 0.2, y: 0.4 }} end={{x:0.4,y:0.8}}style={{ width: '100%', height: '100%' }}>
            {children}
        </LinearGradient>
    )
}

export default ScreenConatainer