import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../utils/colors';

interface Props {
    customStyle?: any
}

const ItemSeparator: React.FC<Props> = (props: any) => {
    return (
        <View style={{ ...styles.separator, ...props.customStyle }} />
    )
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.colors.gray_1,
        height: .4
    }
});

export default ItemSeparator