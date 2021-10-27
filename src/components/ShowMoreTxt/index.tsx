import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

interface Props {
    customStyle?: any,
    onPress?: any,
    onTextLayout?: any,
    numberOfLines?: number,
    truncatedBool?: boolean
}

const ShowMoreTxt: React.FC<Props> = ({ numberOfLines = 2, customStyle, onPress, children, truncatedBool }) => {
    const [isTruncatedText, setIsTruncatedText] = useState(truncatedBool)
    const [showMore, setShowMore] = useState(true)

    return isTruncatedText ? (
        <>
            <Text style={{ ...styles.content, ...customStyle }} numberOfLines={showMore ? numberOfLines : 0}>{children}</Text>
            <Text style={styles.readMore} onPress={() => showMore ? setShowMore(!showMore) : null}>
                {showMore ? 'Read More' : null}
            </Text>
        </>
    ) : (
        <Text
            onTextLayout={(event) => {
                const { lines } = event.nativeEvent
                setIsTruncatedText(lines?.length > numberOfLines)
            }}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    content: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        marginLeft: 10,
        color: colors.colors.white
    },
    readMore: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: colors.colors.gray_1,
        marginLeft: 10,
    },
});

export default ShowMoreTxt