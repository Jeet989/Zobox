import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../utils/colors';

import CText from '../CText';

interface Props {
    uri: string,
    userName: string,
    onPress?: any
}

const MessageFeedListComponent: React.FC<Props> = (props: any) => {
    return (
        <View style={styles.profileBttnView}>
            <TouchableOpacity onPress={() => props.onPress()} style={styles.bttnViewStyle} >
                <FastImage source={{ uri: props.uri, priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.mainImgStyle} />
                <CText customStyle={styles.userNameStyle}>{props.userName}</CText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bttnViewStyle: {
        flexDirection: 'row'
    },
    userNameStyle: {
        textAlignVertical: 'center',
        textAlign: 'left',
        fontSize: 17,
        color: colors.colors.white
    },
    mainImgStyle: {
        height: 65,
        width: 65,
        borderRadius: 13,
    },
    profileBttnView: {
        padding: 5
    },
});

export default MessageFeedListComponent