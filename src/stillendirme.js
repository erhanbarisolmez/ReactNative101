import { StyleSheet, Text, View } from "react-native";
export default function Stillendirme() {
    return (  
        <View style={styles.container}>
            <Text>Merhaba React Native</Text>

            <View style={[styles.box, styles.box1]}>
                <Text style={[styles.text, styles.text1]}>React Native</Text>
            </View>

            <View style={[styles.box, styles.box2]}>
                <Text style={[styles.text, styles.text2]}>React</Text>
            </View>

            <View style={[styles.box]}>
                <Text style={[styles.text, styles.text3]}>JavaScript</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'pink',
        marginBottom: 10,
    },
    box1: {
        backgroundColor: 'blue'
    },
    box2: {
        backgroundColor: "bisque"
    },
    text: {
        color: '#fff', 
        backgroundColor: 'gray',
        fontSize: 30,
        textAlign: 'center'
    },
    text1: {
        backgroundColor: 'black'
    },
    text2 : {
        backgroundColor : 'aquamarine',
        color: "#000"
    },
    text3 : {
        backgroundColor: 'lightgray',
        color: '#000'
    }
})
