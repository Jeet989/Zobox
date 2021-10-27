import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../utils/colors'
import CText from '../CText'

interface Props {
    onPress: any,
    label: string
}

const CButton: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={styles.bttnStyle} activeOpacity={.5}>
            <CText customStyle={styles.customStyle}>{props.label}</CText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customStyle: {
        color: colors.colors.white,
        textAlign: 'center',
        fontSize: 17
    },
    bttnStyle: {
        backgroundColor: colors.colors.cyan_1,
        marginHorizontal: 12,
        padding: 17,
        borderRadius: 13,
    }
});

export default CButton