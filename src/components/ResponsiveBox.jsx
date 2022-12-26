import { ScrollView ,StyleSheet} from "react-native"

const ResponsiveBox = ({children}) => {
  return (
   <ScrollView contentContainerStyle={styles.box} testID='respBox'>
    {children}
    </ScrollView>
  )
}

const styles=StyleSheet.create({
box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
}
})


export default ResponsiveBox