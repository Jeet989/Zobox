import React from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image';

const AuthHeader: React.FC = () => {
    return (
        <View>
        <View style={styles.firstUpperView}>
            <View style={styles.innerLeftView}>
                <FastImage source={{ uri: 'https://images8.alphacoders.com/568/thumb-1920-568490.jpg', priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.leftImg}
                />
            </View>

            <View style={styles.innerRightView}>
                <FastImage source={{ uri: 'https://cdn.wallpapersafari.com/79/19/jurUQH.jpg', priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.leftImg}
                />
            </View>
        </View>

        <View style={styles.innerUpperView}>
            <FastImage source={{ uri: 'https://cdn.wallpapersafari.com/64/95/GVjh9E.jpg', priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.mainImg}
            />
        </View>

        <View style={styles.firstBttnView}>
            <View style={styles.innerBttnLeftView}>
                <FastImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jPN9MmrMgkbElWse7Dhw3y3NC5FMzfXcrA&usqp=CAU', priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.bttnImg}
                />
            </View>

            <View style={styles.innerBttnRightView}>
                <FastImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JNL4jNgKgM_oq4xQ061dnOFB7NWv389cAw&usqp=CAU', priority: FastImage.priority.high }} resizeMode={'cover'} style={styles.bttnImg}
                />
            </View>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    
    bttnImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    leftImg: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    firstBttnView: {
        flexDirection: 'row',
        marginTop: 50
    },
    innerBttnLeftView: {
        marginLeft: 50,
        flex: 1,
    },
    innerBttnRightView: {
        marginRight: 30,
    },
    innerLeftView: {
        flex: 1,
        marginLeft: 40,
        marginTop: 40
    },
    innerRightView: {
        marginRight: 40,
        marginTop: 40
    },
    firstUpperView: {
        flexDirection: 'row'
    },
    mainImg: {
        width: 170,
        height: 170,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 85,
    },
    innerUpperView: {
        justifyContent: 'center',
    },
});

export default AuthHeader