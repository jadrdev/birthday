import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native'

export default function RegisterForm(props) {
    const { changeForm } = props;

    const register = () => {
        console.log("Registrando...");
    };

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
            />

            <TextInput
                style={styles.input}
                placeholder="Repetir Contraseña"
                placeholderTextColor="#969696"
            />

            <TouchableOpacity>
                <Text style={styles.btnText} onPress={register}>Registrarse</Text>
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
        marginBottom: 10,
        marginTop: 50,
    },
})
