import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { StyleSheet, View, ScrollView, Alert } from 'react-native'
import AddBirthday from '../components/AddBirthday'
import ActionBar from '../components/ActionBar'
import Birthday from '../components/Birthday'
import firebase from '../utils/firebase'
import 'firebase/firestore'

firebase.firestore().settings({ experimentalForceLongPolling: true })
const db = firebase.firestore(firebase)

export default function Listbirthday(props) {
    const { user } = props
    const [showList, SetShowList] = useState(true)
    const [birthday, setBirthday] = useState({})
    const [pasaBirthday, setpasaBirthday] = useState([])
    const [reloadData, setreloadData] = useState(false)

    //console.log(birthday)

    useEffect(() => {
        setBirthday([])
        setpasaBirthday([])
        db.collection(user.uid)
            .orderBy('datebirth', 'asc')
            .get()
            .then(response => {
                const itemArray = []
                response.forEach(doc => {
                    const data = doc.data()
                    data.id = doc.id
                    itemArray.push(data)
                })
                formatData(itemArray)
            })
        setreloadData(false)
    }, [reloadData, user.uid])

    // Función para formatear fechas
    const formatData = items => {
        const currentDate = moment().set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        })
        const birthdayTempArray = []
        const pasabirthdayTempArray = []

        items.forEach(item => {
            const dateBirth = new Date(item.datebirth.seconds * 1000)
            const dateBirthday = moment(dateBirth)
            const currentYear = moment().get('year')
            dateBirthday.set({ year: currentYear })

            const diffDate = currentDate.diff(dateBirthday, 'days')
            const itemTemp = item
            itemTemp.dateBirthday = dateBirthday
            itemTemp.days = diffDate

            if (diffDate <= 0) {
                birthdayTempArray.push(itemTemp)
            } else {
                pasabirthdayTempArray.push(itemTemp)
            }
        })
        //Comprobación de los array llehgan bien
        //console.log(birthdayTempArray)
        //console.log(pasabirthdayTempArray)
        setBirthday(birthdayTempArray)
        setpasaBirthday(pasabirthdayTempArray)
    }

    const deleteBirthday = birthday => {
        Alert.alert(
            'Eliminar cumpleaños',
            `Estas seguro de eliminar el cumpleaños de ${birthday.name} ${
                birthday.lastname
            }`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        db.collection(user.uid)
                            .doc(birthday.id)
                            .delete()
                            .then(() => {
                                setreloadData()
                            })
                    },
                },
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={styles.container}>
            {showList ? (
                <ScrollView style={styles.scrollview}>
                    {birthday.map((item, index) => (
                        <Birthday
                            key={index}
                            birthday={item}
                            deleteBirthday={deleteBirthday}
                        />
                    ))}
                    {pasaBirthday.map((item, index) => (
                        <Birthday
                            key={index}
                            birthday={item}
                            deleteBirthday={deleteBirthday}
                        />
                    ))}
                </ScrollView>
            ) : (
                <AddBirthday
                    user={user}
                    SetShowList={SetShowList}
                    setreloadData={setreloadData}
                />
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
    scrollview: {
        marginBottom: 50,
        width: '100%',
    },
})
