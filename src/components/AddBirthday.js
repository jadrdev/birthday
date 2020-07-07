import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'

export default function AddBirthday() {
    const [formData, setformData] = useState({})
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const hidedatePicker = () => {
        setDatePickerVisibility(false)
    }

    const showdatepicker = () => {
        setDatePickerVisibility(true)
    }

    const haldleConfirm = data => {
        const datebirth = data
        datebirth.setHours(0)
        datebirth.setMinutes(0)
        datebirth.setSeconds(0)
        setformData({ ...formData, datebirth })
        console.log(formData)
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
                    <Text
                        style={{
                            color: formData.datebirth ? '#fff' : '#969696',
                            fontSize: 18,
                        }}
                        onPress={showdatepicker}
                    >
                        {formData.datebirth
                            ? moment(formData.datebirth).format('LL')
                            : 'Fecha de nacimiento'}
                    </Text>
                </View>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={haldleConfirm}
                onCancel={hidedatePicker}
                headerTextIOS="Escoge la fecha de cumpleaños"
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
})
