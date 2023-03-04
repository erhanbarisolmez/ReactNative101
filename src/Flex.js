import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import User from './User';
import Title from './components/Title';
/*
flexDirection: row -> Birincil eksen yatay.
flexDirection: column -> Birincil eksen yatay.

justifyContent: Birincil eksende elemanların nasıl konumlanacağını belirler.
alignItems: İkincil eksende elemanrınn nasıl konumlanacağını belirler.
*/
export default function Flex(props) {
  return (
    <>
    <View style={styles.container}>

      <View style={styles.box1}>
     
      <Title title="Merhaba " color='aqua' number={3}></Title>
      <Title title="React " color='yellow' number={2}></Title>
      <Title title="Native" color='pink' number={4}></Title>
      <View style={[styles.box2, styles.data]}>
      <User data={{id:1, name: 'Mehmet'}} />
      </View>
      <View style={[styles.child, styles.child4]}></View>
      <View style={[styles.child, styles.child5]}></View>
      </View>

      <View style={styles.box2}>

        <View style={[styles.child, styles.child1]}><User text="Talha"/></View>
        <View style={[styles.child, styles.child2]}><User text="Ömer"/></View>
        <View style={[styles.child, styles.child3]}><User text="Barış"/></View>
        <Text>Container 1</Text>
        <Button title= "Click Button" onPress={()=> alert("merhaba")}/>
        <TouchableOpacity>
        <Text onPress={()=>alert('BOX 2')}>Box 2</Text>
        </TouchableOpacity>
      </View>

    </View>

    <View style={styles.container2}>
        <View style={styles.box3}>
        <Text>Container 2</Text>
        <Text>Box 3</Text>
        </View>
        <View style={[styles.box3, styles.box4]}>
        <Text>Container 2</Text>
        <Text>Box 4</Text>
        </View>
    </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    marginTop:220,
    flexDirection: 'column'
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  box1: {
    backgroundColor: 'gray',
    width: '100%',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  child4: {
    backgroundColor: '#ec4c4c',
    
  },
  child5:{
    backgroundColor: 'aquamarine'
  },
  box2: {
    backgroundColor: 'bisque',
    flex: 0.5,
    width:'100%',
    alignItems: 'center',
  },
  box3:{
    backgroundColor: 'lightgray',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box4: {
    backgroundColor: 'pink',
    flex: 1,
  },
  child:{
    backgroundColor : '#dddd',
  },
  child1: {
    flex:1,
    height:100,
    width:250,
    backgroundColor: '#ffc107',
  },
  child2:{
   flex:1,
    backgroundColor : '#0ac556',
    height:100,
    width:250,
  },
  child3:{  
    flex:1,
    backgroundColor : '#4630eb',
    height:100,
    width:250,
  },
});
