import { FlatList, StyleSheet } from "react-native"

const ResponsiveFlatList = ({data,renderItem}) => {
  return (
   <FlatList key={(item,index)=>index}  data={data} renderItem={renderItem} keyExtractor={(item,index)=>index} contentContainerStyle={styles.list} testID='respList' />
  )
}
const styles=StyleSheet.create({
    list:{
        display:'flex',
        alignItems:'center'
    }
})
export default ResponsiveFlatList
