import React, { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import AuthHeader from '../../../components/AuthHeader'
import CButton from '../../../components/CButton'
import CInput from '../../../components/CInput'
import CText from '../../../components/CText'
import colors from '../../../utils/colors'


const Login: React.FC = ({ navigation }: any) => {
    const [secure, setSecure] = useState<boolean>(true)
    const onEndText = (val: any) => console.log(val)

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar animated barStyle={'light-content'} backgroundColor={colors.colors.black} />

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'} >

                <AuthHeader />

                <View style={styles.lowerView}>
                    <CText customStyle={styles.customStyle}>Log in to Zobax</CText>

                    <View style={styles.inputView}>
                        <CInput
                            placeholder='johndoe@gmail.com'
                            keyboardType='email-address'
                            onBlur={(values: any) => onEndText(values)}
                            inputStyle={styles.CInputStyle}
                        />
                        <CInput
                            placeholder='password'
                            keyboardType='default'
                            onBlur={(values: any) => onEndText(values)}
                            rightIcon={secure ? <Ionicons name={'ios-eye-outline'} size={25} color={colors.colors.gray_1} onPress={() => setSecure(!secure)} /> : <Ionicons name={'ios-eye-off-outline'} size={25} color={colors.colors.gray_1} onPress={() => setSecure(!secure)} />}
                            secureTextEntry={secure}
                            inputStyle={styles.CInputStyle}
                        />

                        <CButton
                            label={'Login'}
                            onPress={() => navigation.navigate('dashboard')} />
                    </View>

                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <CText customStyle={styles.customBttnTxt}>Don't have an account? Sign up</CText>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    CInputStyle: {
        color: colors.colors.gray_2
    },
    customBttnTxt: {
        fontSize: 17,
        color: colors.colors.gray_2,
        fontFamily: 'Roboto-Light'
    },
    bottomView: {
        alignSelf: 'center',
        marginBottom: 10
    },
    inputView: {
        flex: 1,
        justifyContent: 'center'
    },
    contentContainerStyle: {
        flexGrow: 1
    },
    customStyle: {
        color: colors.colors.white,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 20,
    },
    scrollView: {
        flex: 1,
    },
    lowerView: {
        flex: 1,
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black
    }
});

export default Login