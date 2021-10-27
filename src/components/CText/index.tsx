import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'


interface Props {
    customStyle?: any,
    onPress?: any,
}

const CText: React.FC<Props> = (props) => {
    return (
        <Text style={{ ...styles.text, ...props.customStyle }} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        marginLeft: 10
    }
});

export default CText
