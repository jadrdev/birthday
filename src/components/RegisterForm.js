import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RegisterForm(props) {
    const {changeForm} = props;

    return (
        <View>
            <Text>RegisterForm</Text>
            <TouchableOpacity>
            <Text style={styles.btnText} onPress={changeForm}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
});
