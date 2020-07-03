import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function ActionBar() {
    return (
        <View style={styles.viewFooter}>
            <View>
                <Text>Cerrar Sesión</Text>
            </View>
            <View>
                <Text>Nueva Fecha</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    textoA: {
        color: '#fff',
    },
});
