import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AuthHeader from '../../../components/AuthHeader'
import CButton from '../../../components/CButton'
import CInput from '../../../components/CInput'
import CText from '../../../components/CText'
import colors from '../../../utils/colors'

const Signup: React.FC = ({ navigation }: any) => {

    const [secure, setSecure] = useState<boolean>(true)
    const onEndText = (val: any) => console.log(val)

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar animated barStyle='light-content' backgroundColor={colors.colors.black} />
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                <AuthHeader />
                <View style={styles.lowerView}>
                    <CText customStyle={styles.customStyle}>Sign up to Zobax</CText>

                    <View style={styles.inputView}>
                        <CInput
                            placeholder='jane doe'
                            keyboardType='email-address'
                            onBlur={(values: any) => onEndText(values)}
                            inputStyle={styles.CInputStyle}
                        />
                        <CInput
                            placeholder='janedoe@gmail.com'
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
                            label={'Sign up'}
                            onPress={() => navigation.navigate('dashboard')} />
                    </View>

                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <CText customStyle={styles.customBttnTxt}>Already have an account? Login</CText>
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
    customStyle: {
        color: colors.colors.white,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        marginTop: '1%',
        fontSize: 20,
    },
    contentContainerStyle: {
        flexGrow: 1,
    },
    scrollView: {
        flex: 1
    },
    lowerView: {
        flex: 1,
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black
    }
});

export default Signup