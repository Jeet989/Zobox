import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text } from 'react-native';
import { Bubble, Composer, GiftedChat, IMessage, InputToolbar, MessageContainer } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';

const MessageListComponent: React.FC = (props: any) => {
    const [messages, setMessages] = useState<IMessage[]>([])

    const nxtMssg = () => {
        setMessages(prevMssgs => GiftedChat.append(prevMssgs, [
            {
                _id: new Date().getTime() + Math.round(Math.random()),
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: new Date().getTime() + 10,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]))
    }

    const sendMessages = useCallback((newMssgs: any) => {
        setMessages(prevMssgs => GiftedChat.append(prevMssgs, newMssgs))

        setTimeout(() => {
            nxtMssg()
        }, 200)
    }, [])

    const customRenderInputToolbar = (data: any) => <InputToolbar {...data} containerStyle={styles.input} />

    const customRenderBubble = (data: any) => <Bubble {...data} wrapperStyle={{
        left: {
            backgroundColor: '#0096c7',
        },
        right: {
            backgroundColor: '#caf0f8',
        }
    }}
        textStyle={{
            left: {
                color: colors.colors.white,
            },
            right: {
                color: colors.colors.black
            }
        }}
        usernameStyle={{ color: colors.colors.gray_3 }}
    />

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar animated={true} barStyle={'light-content'} backgroundColor={colors.colors.black} />
            <GiftedChat
                user={{ _id: '7cc3ddd4-040c-11ec-9a03-0242ac130003', name: 'Jeet Mehta', avatar: 'https://wallpaperaccess.com/full/31189.jpg' }}
                messages={messages}
                onSend={sendMessages}
                // @ts-ignore
                textInputStyle={styles.input}
                alwaysShowSend={true}
                showUserAvatar={false}
                showAvatarForEveryMessage={false}
                renderInputToolbar={customRenderInputToolbar}
                renderBubble={customRenderBubble}
                minInputToolbarHeight={50}
                minComposerHeight={50}
                renderUsernameOnMessage={true}
                timeTextStyle={{
                    left: {
                        color: colors.colors.gray_3
                    },
                    right: {
                        color: colors.colors.gray_3
                    }
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        color: colors.colors.white,
        fontFamily: 'Roboto-Regular',
        backgroundColor: colors.colors.black,
        fontSize: 17
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black
    }
});

export default MessageListComponent