import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CText from '../../../components/CText'
import ItemSeparator from '../../../components/ItemSeparator'
import MessageFeedListComponent from '../../../components/MessageFeedListComponent'
import colors from '../../../utils/colors'

const user_data = [
    { id: '1', name: 'adada', profile_pic: 'https://c4.wallpaperflare.com/wallpaper/250/815/774/digital-art-skull-red-background-teeth-wallpaper-preview.jpg', post_pic: 'https://c4.wallpaperflare.com/wallpaper/250/815/774/digital-art-skull-red-background-teeth-wallpaper-preview.jpg' },
    { id: '2', name: 'Karina', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdx7hs6Nf4dKbD7j4eKb4FXEcIRM5Px3QgQ&usqp=CAU', post_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdx7hs6Nf4dKbD7j4eKb4FXEcIRM5Px3QgQ&usqp=CAU' },
    { id: '3', name: 'gaben', profile_pic: 'https://2.bp.blogspot.com/-XUyvkMiDBAs/W7FrFiqiJsI/AAAAAAAADIw/HOj9gjgFxIoEk9PG5e06JQbNBwLWF9ekwCLcBGAs/s1600/abstract274_uhd.jpg', post_pic: 'https://2.bp.blogspot.com/-XUyvkMiDBAs/W7FrFiqiJsI/AAAAAAAADIw/HOj9gjgFxIoEk9PG5e06JQbNBwLWF9ekwCLcBGAs/s1600/abstract274_uhd.jpg' },
    { id: '4', name: 'Shroud', profile_pic: 'https://wallpapercave.com/wp/wp8953922.jpg', post_pic: 'https://wallpapercave.com/wp/wp8953922.jpg' },
    { id: '5', name: 's1mple', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI30TWVTzPUb-RemyRCAkN0K4zBfIpyAofkA&usqp=CAU', post_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI30TWVTzPUb-RemyRCAkN0K4zBfIpyAofkA&usqp=CAU' },
    { id: '6', name: 'niko', profile_pic: 'https://wallpaperaccess.com/full/1369012.jpg', post_pic: 'https://wallpaperaccess.com/full/1369012.jpg' },
    { id: '7', name: 'kennyS', profile_pic: 'https://www.sony-asia.com/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960', post_pic: 'https://www.sony-asia.com/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960' },
    { id: '8', name: 'g1ave', profile_pic: 'https://wallpaperaccess.com/full/508751.jpg', post_pic: 'https://wallpaperaccess.com/full/508751.jpg' },
    { id: '9', name: 'magisk', profile_pic: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', post_pic: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: '10', name: 'pimp', profile_pic: 'https://wallpapercave.com/wp/wp5633980.jpg', post_pic: 'https://wallpapercave.com/wp/wp5633980.jpg' },
    { id: '11', name: 'hunter', profile_pic: 'https://cdn.wallpapersafari.com/47/55/Sg5pZF.jpg', post_pic: 'https://cdn.wallpapersafari.com/47/55/Sg5pZF.jpg' },
    { id: '12', name: 'nexa', profile_pic: 'https://wallpaperaccess.com/full/685208.jpg', post_pic: 'https://wallpaperaccess.com/full/685208.jpg' },
    { id: '13', name: 'amanek', profile_pic: 'https://wallpapercave.com/wp/wp4600617.jpg', post_pic: 'https://wallpapercave.com/wp/wp4600617.jpg' },
    { id: '14', name: 'Jackz', profile_pic: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', post_pic: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: '15', name: 'boombl4', profile_pic: 'https://t3.ftcdn.net/jpg/03/17/21/94/360_F_317219421_P8SmLPcqLYQERb3bcctIQD9grBU5wbYC.jpg', post_pic: 'https://t3.ftcdn.net/jpg/03/17/21/94/360_F_317219421_P8SmLPcqLYQERb3bcctIQD9grBU5wbYC.jpg' },
    { id: '16', name: 'b1t', profile_pic: 'https://wallpapercave.com/wp/wp5984922.jpg', post_pic: 'https://wallpapercave.com/wp/wp5984922.jpg' },
]

const MessageFeed: React.FC = (props: any) => {
    const [data, setData] = useState<object[]>(user_data)

    // rendering message feed list items components
    const renderMessageItems = ({ item }: any) => {
        return (
            <View style={styles.messgeItems}>
                <MessageFeedListComponent
                    uri={item.profile_pic}
                    userName={item.name}
                    onPress={() => props.navigation.navigate('messages')}
                />
            </View>
        )
    }

   
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar animated={true} backgroundColor={colors.colors.black} barStyle={'light-content'} />
            <ItemSeparator customStyle={styles.itemSeparator} />

            {/* flatlist for rendering message feed list */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMessageItems}
                showsVerticalScrollIndicator={false}
                onEndReached={() => setData([...data, ...data])}
                onEndReachedThreshold={.5}
                ListFooterComponent={() => <ActivityIndicator size={'large'} color={colors.colors.white} />}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    messageFeedItemSeparator: {
        marginHorizontal: 3,
    },
    messgeItems: {
        marginVertical: 5
    },
    itemSeparator: {
        height: .2
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black
    }
});

export default React.memo(MessageFeed)