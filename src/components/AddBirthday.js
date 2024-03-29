/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'
import firebase from '../utils/firebase'
import 'firebase/firestore'

firebase.firestore().settings({ experimentalForceLongPolling: true })
const db = firebase.firestore(firebase)

export default function AddBirthday(props) {
    const { user, SetShowList, setreloadData } = props
    const [formData, setformData] = useState({})
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [formError, setformError] = useState({})

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
        hidedatePicker()
    }

    const onChange = (e, type) => {
        setformData({ ...formData, [type]: e.nativeEvent.text })
    }

    const onSubmit = () => {
        let errors = {}
        if (!formData.name || !formData.lastname || !formData.datebirth) {
            if (!formData.name) {
                errors.name = true
            }
            if (!formData.lastname) {
                errors.lastname = true
            }
            if (!formData.datebirth) {
                errors.datebirth = true
            }
        } else {
            const data = formData
            data.datebirth.setYear(0)
            db.collection(user.uid)
                .add(data)
                .then(() => {
                    setreloadData(true)
                    SetShowList(true)
                })
                .catch(() => {
                    setformError({
                        name: true,
                        lastname: true,
                        datebirth: true,
                    })
                })
        }

        setformError(errors)
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="#969696"
                    style={[
                        styles.input,
                        formError.name && {
                            borderColor: '#940c0c',
                        },
                    ]}
                    onChange={e => onChange(e, 'name')}
                />
                <TextInput
                    placeholder="Apellidos"
                    placeholderTextColor="#969696"
                    style={[
                        styles.input,
                        formError.lastname && {
                            borderColor: '#940c0c',
                        },
                    ]}
                    onChange={e => onChange(e, 'lastname')}
                />
                <View
                    style={[
                        styles.input,
                        styles.datepicker,
                        formError.datebirth && {
                            borderColor: '#940c0c',
                        },
                    ]}
                >
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
                <View>
                    <TouchableOpacity onPress={onSubmit}>
                        <Text style={styles.addButton}>Crear Cumpleaños</Text>
                    </TouchableOpacity>
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
    addButton: {
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
})