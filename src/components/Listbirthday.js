import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AddBirthday from '../components/AddBirthday'
import ActionBar from '../components/ActionBar'
import firebase from '../utils/firebase'
import 'firebase/firestore'

firebase.firestore().settings({ experimentalForceLongPolling: true })
const db = firebase.firestore(firebase)

export default function Listbirthday(props) {
    const { user } = props
    const [showList, SetShowList] = useState(true)
    const [birhday, setBirhday] = useState({})

    useEffect(() => {
        setBirhday([])
        db.collection(user.uid)
            .orderBy('dateBith', 'asc')
            .get()
            .then(response => {
                const itemArray = []
                response.forEach(doc => {
                    const data = doc.data()
                    data.id = doc.id
                    itemArray.push(data)
                })
                console.log(itemArray)
            })
    }, [])

    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                    <Text> Listbirthday </Text>
                </>
            ) : (
                <AddBirthday user={user} SetShowList={SetShowList} />
            )}
            <ActionBar showList={showList} SetShowList={SetShowList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
})
