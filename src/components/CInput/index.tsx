import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../utils/colors'

interface Props {
    customContainerStyle?: any,
    customInputContainerStyle?: any,
    keyboardType?: string,
    placeholder?: string,
    rightIcon?: any,
    rightIconContainerStyle?: any,
    secureTextEntry?: boolean,
    customStyle?: any,
    inputStyle?: any,
    onBlur: any
}


const CInput: React.FC<Props> = (props) => {
    const [input, setInput] = useState<string>('')
    return (
        <Input
            value={input}
            onChangeText={setInput}
            autoCorrect={false}
            containerStyle={{ ...styles.containerStyle, ...props.customContainerStyle }}
            inputContainerStyle={{ ...styles.inputContainerStyle, ...props.customInputContainerStyle }}
            // @ts-ignore
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            onBlur={() => props.onBlur(input)}
            placeholder={props.placeholder}
            placeholderTextColor={colors.colors.gray_1}
            inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
            rightIcon={props.rightIcon}
            rightIconContainerStyle={{ ...styles.rightIconContainerStyle, ...props.rightIconContainerStyle }}
            secureTextEntry={props.secureTextEntry}
            style={{ ...styles.style, ...props.customStyle }}
        />
    )
}

const styles = StyleSheet.create({
    inputStyle: {},
    containerStyle: {},
    inputContainerStyle: {
        padding: 7,
        borderWidth: 1.8,
        borderColor: colors.colors.gray_1,
        borderRadius: 13,
        color: colors.colors.white,
    },
    rightIconContainerStyle: {},
    style: {},
});

export default CInput
