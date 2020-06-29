import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native'

export default function RegisterForm(props) {
    const { changeForm } = props
    const [formData, setFormData] = useState(defaulValue())
    const [formError, setFormError] = useState()

    const register = () => {
        let errors = {}
        if (!formData.email || !formData.password || !formData.repeatpassword) {
            if (!formData.password) {
                errors.email = true
            }
            errors.email = true
            if (!formData.password) {
                errors.password = true
            }
            if (!formData.repeatpassword) {
                errors.repeatpassword = true
            }
        }
        console.log(errors);
    }

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={e =>
                    setFormData({ ...formData, email: e.nativeEvent.text })
                }
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={e =>
                    setFormData({ ...formData, password: e.nativeEvent.text })
                }
            />

            <TextInput
                style={styles.input}
                placeholder="Repetir Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={e =>
                    setFormData({
                        ...formData,
                        repeatpassword: e.nativeEvent.text,
                    })
                }
            />

            <TouchableOpacity>
                <Text style={styles.btnText} onPress={register}>
                    Registrarse
                </Text>
            </TouchableOpacity>

            <View styles={styles.login}>
                <TouchableOpacity>
                    <Text style={styles.btnText} onPress={changeForm}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaulValue() {
    return {
        email: '',
        password: '',
        repeatpassword: '',
    }
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 18,
    },

    input: {
        height: 50,
        color: '#fff',
        width: "80%",
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
    login: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})
