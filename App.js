import React, { useState, useEffect } from 'react'
import { decode, encode } from 'base-64'
import {
    StatusBar,
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Button,
} from 'react-native'
import Auth from './src/components/Auth'
import firebase from './src/utils/firebase'
import 'firebase/auth'
import Listbirthday from './src/components/Listbirthday'

console.disableYellowBox = true

if (!global.btoa) {
    global.btoa = encode
}

if (!global.atob) {
    global.atob = decode
}

export default function App() {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(response => {
            setUser(response)
        })
    }, [])

    if (user === undefined) {
        return null
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.background}>
                {user ? <Listbirthday /> : <Auth />}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#15212b',
        height: '100%',
    },
})
