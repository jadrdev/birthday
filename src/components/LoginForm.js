import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import {validateEmail} from "../utils/validation"
import firebase from "../utils/firebase"

export default function LoginForm(props) {
    const { changeForm } = props
    const login = () => {
        console.log('Iniciado Sesión')
    }

    return (
        <>
         <TextInput 
            style={styles.input}
            placeholder="Correo Electronico"
            placeholderTextColor="#969696"
         />

        <TextInput 
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={true}
         />

         <TouchableOpacity onPress={login}>
             <Text style={styles.btnText}>
             Iniciar Sesión
             </Text>
         </TouchableOpacity>     

            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    input: {
        height: 50,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
});
