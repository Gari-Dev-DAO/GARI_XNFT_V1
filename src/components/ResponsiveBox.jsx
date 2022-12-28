import { ScrollView ,StyleSheet} from "react-native"


const ResponsiveBox = ({children,style}) => {
  return (
   <ScrollView contentContainerStyle={[styles.box,style]} testID='respBox'>
     
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