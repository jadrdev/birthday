import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function AddBirthday() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const hidedatePicker = () => {
        setDatePickerVisibility(false)
    }

    const showdatepicker = () => {
        setDatePickerVisibility(true)
    }

    const haldleConfirm = data => {
        console.log(data)
        hidedatePicker()
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="#969696"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Apellidos"
                    placeholderTextColor="#969696"
                    style={styles.input}
                />
                <View style={[styles.input, styles.datepicker]}>
                    <Text style={styles.textdate} onPress={showdatepicker}>
                        Fecha de nacimiento
                    </Text>
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={haldleConfirm}
                onCancel={hidedatePicker}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040',
        borderRadius: 30,
    },

    datepicker: {
        justifyContent: 'center',
    },
    textdate: {
        color: '#969696',
        fontSize: 18,
    },
})
