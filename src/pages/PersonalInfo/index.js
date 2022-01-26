import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'
import ChangeData from '../ChangeData'
import ChangePassword from '../ChangePassword'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function NewEvent(){
        Navigation.push('NewEvent')
    }
    
    function NewPromotion(){
        Navigation.push('NewPromotion')
    }

    function Logout(){
        Navigation.push('Home')
    }

    function ChangeData(){
        Navigation.push('ChangeData')
    }

    function ChangePassword(){
        Navigation.push('ChangePassword')
    }

    return (
        <View style={styles.container}>
            <Header/>

            <TitleText>Informações</TitleText>

            

            <MainButton onPress={NewEvent}>Novo evento</MainButton>
            <MainButton onPress={NewPromotion}>Nova promoção</MainButton>
            <MainButton onPress={ChangeData}>Alterar Dados</MainButton>
            <MainButton onPress={ChangePassword}>Mudar Senha</MainButton>
            <MainButton onPress={() => console.log('Convidar')}>Convidar</MainButton>
            <MainButton onPress={Logout}>Sair</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4CB6CE',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    text: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10
    }
})