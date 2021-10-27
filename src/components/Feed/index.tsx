import React, { useState } from 'react'
import { ActivityIndicator, Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
// @ts-ignore
import ResponsiveImageView from 'react-native-responsive-image-view';


import colors from '../../utils/colors'
import CProfileBttn from '../CProfileBttn'
import CText from '../CText'
import ItemSeparator from '../ItemSeparator'
import FastImage from 'react-native-fast-image';
import ShowMoreTxt from '../ShowMoreTxt';

interface Props {
    profile_pic: string,
    userName: string,
    location: string,
    post_pic: string,
    caption?: string,
}

const Feed: React.FC<Props> = (props) => {

    let counter: number = 0
    const likeFeed = () => {
        counter++
        let timer: any;
        if (counter === 2) {
            console.log('pressed twice')
            clearInterval(timer)
            console.log('inside if condition', timer)
        } else {
            timer = setTimeout(() => {
                console.log('inside else condition setTimeout function')
                counter = 0
            }, 500)
        }
    }

    return (
        // onLayout={e => console.log(e.nativeEvent)}
        <View style={styles.screen}>
            <View style={styles.firstInnerMainView}>
                <CProfileBttn
                    id={'1'}
                    onPress={() => console.log('button pressed feed')}
                    uri={props.profile_pic}
                    mainViewStyle={styles.profileBttnStyle}
                    mainImgStyle={styles.profileImgStyle}
                />
                <View style={styles.firstInnerSubView}>
                    <TouchableOpacity onPress={() => console.log('profile bttn pressed')} activeOpacity={1}>
                        <CText customStyle={styles.profileName}>{props.userName}</CText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('sub text bttn pressed')} activeOpacity={1}>
                        <CText customStyle={styles.subName}>{props.location}</CText>
                    </TouchableOpacity>


                </View>
            </View>

            <ItemSeparator />

            <ResponsiveImageView source={{ uri: props.post_pic }}>
                {({ getViewProps, getImageProps }: any) => (
                    <TouchableWithoutFeedback onPress={likeFeed} >
                        <View {...getViewProps()} style={{ maxHeight: 350 }} >
                            <FastImage {...getImageProps()} resizeMode={'contain'} onLoad={() => <ActivityIndicator size={'large'} color={colors.colors.white} style={{ backgroundColor: 'red', flex: 1 }} />} />
                        </View>
                    </TouchableWithoutFeedback>
                )}
            </ResponsiveImageView>


            <View style={styles.descriptionView}>
                <Feather name="heart" size={27} adjustsFontSizeToFit={true} color={colors.colors.white} style={styles.heartStyle} onPress={() => console.log('liked feed')} />
                <Feather name="message-circle" size={27} adjustsFontSizeToFit={true} color={colors.colors.white} style={styles.messgStyle} />
                <Feather name="send" size={27} adjustsFontSizeToFit={true} color={colors.colors.white} style={styles.sendStyle} />
                <Feather name="bookmark" size={27} adjustsFontSizeToFit={true} color={colors.colors.white} style={styles.bookmarkStyle} />
            </View>


            <ShowMoreTxt numberOfLines={2}>
                <CText customStyle={styles.commentSectionUserName}>
                    {props.userName}
                </CText>
                <ShowMoreTxt customStyle={styles.commentSectionCaptionTxt} truncatedBool={false} numberOfLines={2} >
                    &nbsp;
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </ShowMoreTxt>
            </ShowMoreTxt>


        </View>
    )
}

const styles = StyleSheet.create({
    commentSectionCaptionTxt: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
    commentSectionUserName: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
    },
    commentSectionView: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
    },
    heartStyle: {
        margin: 5
    },
    messgStyle: {
        margin: 5
    },
    sendStyle: {
        flex: 1,
        margin: 5
    },
    bookmarkStyle: {
        margin: 5,
        justifyContent: 'flex-end'
    },
    descriptionView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    feedImg: {
        height: '100%',
        width: '100%',
    },
    feedImgView: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width * 0.67,
        overflow: 'hidden',
    },
    profileImgStyle: {
        height: 55,
        width: 55,
    },
    profileBttnStyle: {
        height: 55,
        width: 55,
        marginHorizontal: 10,
        marginVertical: 10
    },
    firstInnerSubView: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center'
    },
    profileName: {
        color: colors.colors.white,
        fontSize: 16
    },
    subName: {
        color: colors.colors.gray_1,
        fontSize: 13
    },
    firstInnerMainView: {
        flexDirection: 'row',
        marginBottom: 5
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.transparent,
        marginVertical: 7,
    }
});

export default Feed