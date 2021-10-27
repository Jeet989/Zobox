import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import colors from '../../utils/colors'
import CText from '../CText'

interface Props {
    uri: string,
    onPress: any,
    user_name?: string,
    id: string,
    mainViewStyle?: any,
    mainImgStyle?: any,
    profileBttnView?: any,
    userNameStyle?: any
}

const CProfileBttn: React.FC<Props> = (props) => {
    return (
        <View style={{ ...styles.mainView, ...props.mainViewStyle }}>
            <View style={{ ...styles.bttnView, ...props.profileBttnView }}>
                <TouchableOpacity onPress={() => props.onPress(props)}>
                    <FastImage source={{ uri: props.uri, priority: FastImage.priority.high }} resizeMode={'cover'} style={{ ...styles.mainImg, ...props.mainImgStyle }} />
                </TouchableOpacity>
            </View>
            {props.user_name ? <CText customStyle={{ ...styles.customStyle, ...props.userNameStyle }}>{props.user_name}</CText> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    customStyle: {
        textAlign: 'center',
        marginLeft: 0,
        marginTop: 5,
        color: colors.colors.gray_2,
        fontSize: 15,
        fontFamily: 'Roboto-Regular'
    },
    mainImg: {
        // height: '100%',
        // width: '90%',
        height: 65,
        width: 70,
        borderRadius: 13,
        alignSelf: 'center',
    },
    bttnView: {
        // flex: 1,
        marginHorizontal: 7,
    },
    mainView: {
        height: 100,
        width: 100,
    }
});

export default CProfileBttn