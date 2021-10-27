import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { ActivityIndicator, Alert, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera, RNCameraProps } from 'react-native-camera';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../../utils/colors';

const Camera: React.FC = (props: any) => {
    const [gettingPermission, setGettingPermission] = useState<boolean>(true)

    const cameraRef = useRef<any>()

    const askPermission = async () => {
        request(PERMISSIONS.ANDROID.CAMERA).then((res: any) => {
            console.log(res, 'inside request before switch case')
            switch (res) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    console.log('inside unavailable request switch case')
                    break;
                case RESULTS.DENIED:
                    console.log('The permission has not been requested / is denied but requestable');
                    console.log('inside denied request switch case')
                    Alert.alert('Camera Permission Had Been Denied', 'Please Enable from Settings', [{ text: 'ok', onPress: () => props.navigation.navigate('dashboard') }, { text: 'open settings', onPress: () => Linking.openSettings() }])
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    console.log('inside limited request switch case')
                    setGettingPermission(false)
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    console.log('inside granted request switch case')
                    setGettingPermission(false)
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    console.log('inside blocked request switch case')
                    Alert.alert('Camera Permission Had Been Denied', 'Please Enable from Settings', [{ text: 'ok', onPress: () => props.navigation.navigate('dashboard') }, { text: 'open settings', onPress: () => Linking.openSettings() }])
                    break;
                default:
                    console.log('default case opted in ask permissions')
            }
        })
            .catch(err => console.log(err, 'inside error ask permissions'));

    }

    useEffect(() => {
        (async () => check(PERMISSIONS.ANDROID.CAMERA).then((res: any) => {
            console.log(RESULTS, res, 'inside check function before switch')
            switch (res) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    console.log('inside unavailable')
                    break;
                case RESULTS.DENIED:
                    console.log('The permission has not been requested / is denied but requestable');
                    console.log('inside denied')
                    askPermission()
                    break;
                case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    console.log('inside limited')
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    console.log('inside granted')
                    askPermission()
                    break;
                case RESULTS.BLOCKED:
                    console.log('The permission is denied and not requestable anymore');
                    console.log('inside blocked')
                    Alert.alert('Camera Permission Had Been Denied', 'Please Enable from Settings', [{ text: 'ok', onPress: () => props.navigation.navigate('dashboard') }, { text: 'open settings', onPress: () => Linking.openSettings() }])
                    break;
                default:
                    console.log('default case opted in check permissions')
            }
        })
            .catch(err => console.log(err, 'inside error check')))();
        console.log('inside useEffect')
    })

    const takePicture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    if (gettingPermission) {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar animated={true} barStyle={'light-content'} backgroundColor={colors.colors.black} />
                <ActivityIndicator size={'large'} color={colors.colors.white} style={styles.indicator} />
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar animated={true} barStyle={'light-content'} backgroundColor={colors.colors.black} />
                <RNCamera
                    ref={cameraRef}
                    style={styles.camera}
                    // type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    // androidCameraPermissionOptions={{
                    //     title: 'Permission to use camera',
                    //     message: 'We need your permission to use your camera',
                    //     buttonPositive: 'Ok',
                    //     buttonNegative: 'Cancel',
                    // }}
                    // androidRecordAudioPermissionOptions={{
                    //     title: 'Permission to use audio recording',
                    //     message: 'We need your permission to use your audio',
                    //     buttonPositive: 'Ok',
                    //     buttonNegative: 'Cancel',
                    // }}
                    // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    //     console.log(barcodes);
                    // }}
                    useNativeZoom={true}
                    
                />
                <View style={styles.bttnView}>
                    <TouchableOpacity onPress={takePicture} style={styles.capture} onPressIn={() => console.log('onPressIn')} >
                        <Text style={styles.bttnTxt}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    bttnTxt: {
        fontSize: 14
    },
    bttnView: {
        flex: 0,
         flexDirection: 'row',
         justifyContent: 'center' 
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    indicator: {
        flex: 1,
        justifyContent: 'center'
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black
    }
});

export default Camera