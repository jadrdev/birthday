import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ActionBar from '../components/ActionBar'

export default function Listbirthday() {
    return (
        <View style={styles.container}>
            <Text> Hola Mundo </Text>
            <ActionBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
})
