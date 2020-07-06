import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AddBirthday from '../components/AddBirthday'
import ActionBar from '../components/ActionBar'

export default function Listbirthday() {
    const [showList, SetShowList] = useState(true)
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
                <AddBirthday />
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
