import React from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function ChangeData(){
    const {goBack} = useNavigation()

    function Cancel(){
        goBack()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />

                <TitleText>Alterar Dados</TitleText>

                <Text> </Text>
                
                <TextInput placeholder="Nome" style={styles.input}/>

                <TextInput placeholder="Data de Nascimento" style={styles.input}/>

                <TextInput placeholder="Email" style={styles.input}/>

                <TextInput placeholder="CPF/CNPJ" style={styles.input}/> 

                <Pressable style={styles.locationButton}>
                    <Text style={styles.locationText}>
                        <Ionicons size={22} color='red' name='pin' />
                        Localização
                    </Text>
                </Pressable>

                <Text> </Text>
                <Text> </Text>
                <Text> </Text>

                <View style={{flex: 1, paddingTop: '15%', width: '100%', paddingLeft: 8}}>
                    <MainButton onPress={() => console.log('Cadastrar reserva')}>Alterar Dados</MainButton>
                    <MainButton onPress={Cancel}>Cancelar</MainButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4CB6CE',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    input: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%'
    },

    locationButton: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%'
    },

    locationText: {
        color: '#959595',
        fontSize: 16,
        fontWeight: 'bold'
    },

    uploadContainer: {
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%',
        paddingBottom: 40,
        paddingTop: 40
    },

    uploadText: {
        color: '#959595',
        fontSize: 16,
        fontWeight: 'bold'
    },

})