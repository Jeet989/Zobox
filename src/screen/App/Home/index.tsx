import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, FlatList, ActivityIndicator, ScrollView, StatusBar } from 'react-native'
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context'
import { RecyclerListView, DataProvider, LayoutProvider, BaseScrollView } from "recyclerlistview";
import faker from 'faker'
import CProfileBttn from '../../../components/CProfileBttn'
import CText from '../../../components/CText'
import colors from '../../../utils/colors'
import Feed from '../../../components/Feed';

const user_data = [
    { id: '1', name: 'Jack', profile_pic: 'https://c4.wallpaperflare.com/wallpaper/250/815/774/digital-art-skull-red-background-teeth-wallpaper-preview.jpg', post_pic: 'https://c4.wallpaperflare.com/wallpaper/250/815/774/digital-art-skull-red-background-teeth-wallpaper-preview.jpg' },
    { id: '2', name: 'Jack', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdx7hs6Nf4dKbD7j4eKb4FXEcIRM5Px3QgQ&usqp=CAU', post_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdx7hs6Nf4dKbD7j4eKb4FXEcIRM5Px3QgQ&usqp=CAU' },
    { id: '3', name: 'Jack', profile_pic: 'https://2.bp.blogspot.com/-XUyvkMiDBAs/W7FrFiqiJsI/AAAAAAAADIw/HOj9gjgFxIoEk9PG5e06JQbNBwLWF9ekwCLcBGAs/s1600/abstract274_uhd.jpg', post_pic: 'https://2.bp.blogspot.com/-XUyvkMiDBAs/W7FrFiqiJsI/AAAAAAAADIw/HOj9gjgFxIoEk9PG5e06JQbNBwLWF9ekwCLcBGAs/s1600/abstract274_uhd.jpg' },
    { id: '4', name: 'Jack', profile_pic: 'https://wallpapercave.com/wp/wp8953922.jpg', post_pic: 'https://wallpapercave.com/wp/wp8953922.jpg' },
    { id: '5', name: 'Jack', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI30TWVTzPUb-RemyRCAkN0K4zBfIpyAofkA&usqp=CAU', post_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI30TWVTzPUb-RemyRCAkN0K4zBfIpyAofkA&usqp=CAU' },
    { id: '6', name: 'Jack', profile_pic: 'https://wallpaperaccess.com/full/1369012.jpg', post_pic: 'https://wallpaperaccess.com/full/1369012.jpg' },
    { id: '7', name: 'Jack', profile_pic: 'https://www.sony-asia.com/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960', post_pic: 'https://www.sony-asia.com/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=960' },
    { id: '8', name: 'Jack', profile_pic: 'https://wallpaperaccess.com/full/508751.jpg', post_pic: 'https://wallpaperaccess.com/full/508751.jpg' },
    { id: '9', name: 'Jack', profile_pic: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', post_pic: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: '10', name: 'Jack', profile_pic: 'https://wallpapercave.com/wp/wp5633980.jpg', post_pic: 'https://wallpapercave.com/wp/wp5633980.jpg' },
    { id: '11', name: 'Jack', profile_pic: 'https://cdn.wallpapersafari.com/47/55/Sg5pZF.jpg', post_pic: 'https://cdn.wallpapersafari.com/47/55/Sg5pZF.jpg' },
    { id: '12', name: 'Jack', profile_pic: 'https://wallpaperaccess.com/full/685208.jpg', post_pic: 'https://wallpaperaccess.com/full/685208.jpg' },
    { id: '13', name: 'Jack', profile_pic: 'https://wallpapercave.com/wp/wp4600617.jpg', post_pic: 'https://wallpapercave.com/wp/wp4600617.jpg' },
    { id: '14', name: 'Jack', profile_pic: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', post_pic: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: '15', name: 'Jack', profile_pic: 'https://t3.ftcdn.net/jpg/03/17/21/94/360_F_317219421_P8SmLPcqLYQERb3bcctIQD9grBU5wbYC.jpg', post_pic: 'https://t3.ftcdn.net/jpg/03/17/21/94/360_F_317219421_P8SmLPcqLYQERb3bcctIQD9grBU5wbYC.jpg' },
    { id: '16', name: 'Jack', profile_pic: 'https://wallpapercave.com/wp/wp5984922.jpg', post_pic: 'https://wallpapercave.com/wp/wp5984922.jpg' },
]

const ViewTypes = {
    FULL: 0,
}

const Home: React.FC = ({ navigation }: any) => {



    const [tempData, setTempData] = useState<any[]>(user_data)

    const [layoutProvider, setLayoutProvider] = useState(new LayoutProvider((index) => {
        return ViewTypes.FULL
    }, (type, dimensions) => {
        switch (type) {
            case ViewTypes.FULL:
                dimensions.width = 105
                dimensions.height = Dimensions.get('screen').height - (44 + 105)
                break;

            default:
                dimensions.height = 50
                dimensions.width = 50
                break;
        }
    }))

    const [feedLayoutProvider, setFeedLayoutProvider] = useState(new LayoutProvider((index) => {
        return ViewTypes.FULL
    }, (type, dimensions) => {
        switch (type) {
            case ViewTypes.FULL:
                dimensions.width = Dimensions.get('screen').width
                dimensions.height = 479
                break;

            default:
                dimensions.height = Dimensions.get('screen').width
                dimensions.width = 479
        }
    }))


    // const [data, setData] = useState<any>(new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(tempData))
    const data = new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(tempData)
    // const [data, setData] = useState<any>(new DataProvider((r1, r2) => r1.id !== r2.id, (index) => 'id:' + index))
    console.log('initial tempdata =>', tempData)
    const generateUser = async () => {

        let userData: any = [];

        for (var i = 0; i < 30; i++) {
            console.log('value of i =>', i)
            userData = [...userData, {
                id: `${faker.datatype.number()}`,
                name: faker.name.firstName(),
                profile_pic: faker.image.avatar(),
                post_pic: faker.image.city()
            }]
        }
        setTempData(prev => [...prev, ...userData])
    }

    console.log('tempisdsds =>', tempData)
    const endReached = () => {

        generateUser()
    }

    // rendering stories view
    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.mainViewStyle}>
                <CProfileBttn
                    id={item.id} user_name={item.name} uri={item.profile_pic}
                    onPress={(data: any) => console.log(data)}
                />
            </View>
        )
    }

    // rendering feed view
    const renderFeed = (type: any, data: any) => {
        return (
            <View style={styles.renderFeedItems}>
                <Feed location={'New Jersey'} post_pic={data.post_pic} profile_pic={data.profile_pic} userName={data.name} />
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.screen}>

            <StatusBar animated={true} barStyle={'light-content'} backgroundColor={colors.colors.black} />

            {/* <ScrollView keyboardDismissMode={'on-drag'} style={styles.scrollViewStyle} > */}
            {/* stories scrollbar recycler view */}


            {/* <ScrollView> */}
            {/* <RecyclerListView
                    dataProvider={data}
                    rowRenderer={renderItem}
                    layoutProvider={layoutProvider}
                    isHorizontal={true}
                    style={{ maxHeight: Dimensions.get('screen').height / 4 - (105), }}
                    onEndReached={endReached}
                    onEndReachedThreshold={0.5}
                    scrollViewProps={{ showsHorizontalScrollIndicator: false }}
                    renderFooter={() => <View style={{ justifyContent: 'center', height: 80 }}><ActivityIndicator size={'large'} color={colors.colors.white} style={{ marginHorizontal: 10 }} /></View>}
                    forceNonDeterministicRendering={true}
                /> */}

            {/* <FlatList
                    data={tempData}
                    renderItem={renderItem}
                    horizontal={true}
                    onEndReached={endReached}
                    onEndReachedThreshold={.001}
                    getItemLayout={(data, index) => ({ length: Dimensions.get('screen').height - (44 + 105), offset: Dimensions.get('screen').height - (44 + 105) * index, index })}
                /> */}


            {/* feed scrollbar recycler view */}
            <RecyclerListView
                dataProvider={data}
                rowRenderer={renderFeed}
                layoutProvider={feedLayoutProvider}
                onEndReached={endReached}
                style={{ flex: 1, }}
                onEndReachedThreshold={0.1}
                renderFooter={() => <ActivityIndicator size={'large'} color={colors.colors.white} style={{ marginVertical: 10 }} />}
                forceNonDeterministicRendering={true}
                scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                }}
            />
            {/* </ScrollView> */}


            {/* </ScrollView> */}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    renderFeedItems: {
        flex: 1,
    },
    renderItemView: {
        marginVertical: 10,
        marginBottom: 20
    },
    scrollViewStyle: {
        flex: 1,
    },
    mainViewStyle: {
        paddingTop: 10,
    },
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black,
    }
});

export default Home
