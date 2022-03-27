import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function PesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#F5B7B1'}}>
            <Text style={styles.teks}>Riwayat Pemesanan</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    teks:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginTop:10,
    },
});