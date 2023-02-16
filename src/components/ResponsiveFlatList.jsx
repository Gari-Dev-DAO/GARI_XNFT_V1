import { FlatList, StyleSheet } from "react-native"
import { ScrollView } from "react-native"

const ResponsiveFlatList = ({data,renderItem}) => {
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
   <FlatList key={(item,index)=>index}  data={data} renderItem={renderItem} keyExtractor={(item,index)=>index} contentContainerStyle={styles.list} testID='respList'/>
   </ScrollView>
  )
}
const styles=StyleSheet.create({
    list:{
        display:'flex',
        alignItems:'center',
        flex:1,
    }
})
export default ResponsiveFlatList
