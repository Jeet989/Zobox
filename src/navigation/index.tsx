import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Login from '../screen/Auth/Login'
import Signup from '../screen/Auth/Signup'
import Home from '../screen/App/Home'
import Explore from '../screen/App/Explore'
import Cinema from '../screen/App/Cinema'
import Activity from '../screen/App/Activity'
import Profile from '../screen/App/Profile'
import colors from '../utils/colors'
import MessageFeed from '../screen/App/MessageFeed'
import { Text } from 'react-native'
import MessageListComponent from '../components/MessageListComponent'
import Camera from '../screen/App/Camera'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigation: React.FC = ({ navigation }: any) => {
    const [homeActive, setHomeActive] = useState<boolean>(true)
    const [cinemaActive, setCinemaActive] = useState<boolean>(false)
    const [exploreActive, setExploreActive] = useState<boolean>(false)
    const [activityActive, setActivityActive] = useState<boolean>(false)
    const [profileActive, setProfileActive] = useState<boolean>(false)

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.colors.background_2,
            },
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen name={'home'} component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => homeActive ? <MaterialCommunityIcons name={'home'} size={35} color={colors.colors.white} /> : <MaterialCommunityIcons name={'home-outline'} size={35} color={colors.colors.white} />,
                    headerLeft: () => <MaterialCommunityIcons name={'camera-outline'} color={colors.colors.white} size={30} style={{ marginLeft: 13 }} onPress={() => navigation.navigate('camera')} />,
                    headerRight: () => <MaterialCommunityIcons name={'message-outline'} color={colors.colors.white} size={30} style={{ marginRight: 13 }} onPress={() => navigation.navigate('messageFeed')} />,
                    headerShown: true,
                    headerStyle: { backgroundColor: colors.colors.black },
                    headerTitle: ''
                }}
                listeners={{
                    tabPress: () => {
                        setHomeActive(true)
                        setCinemaActive(false)
                        setActivityActive(false)
                        setExploreActive(false)
                        setProfileActive(false)
                    }
                }} />
            <Tab.Screen name={'explore'} component={Explore}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => exploreActive ? <Ionicons name={'search'} size={27} color={colors.colors.white} /> : <Ionicons name={'search-outline'} size={27} color={colors.colors.white} />,
                }}
                listeners={{
                    tabPress: () => {
                        setExploreActive(true)
                        setHomeActive(false)
                        setCinemaActive(false)
                        setActivityActive(false)
                        setProfileActive(false)
                    }
                }} />
            <Tab.Screen name={'cinema'} component={Cinema}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => cinemaActive ? <MaterialCommunityIcons name={'movie-open'} size={30} color={colors.colors.white} /> : <MaterialCommunityIcons name={'movie-open-outline'} size={30} color={colors.colors.white} />,
                }}
                listeners={{
                    tabPress: () => {
                        setHomeActive(false)
                        setCinemaActive(true)
                        setExploreActive(false)
                        setActivityActive(false)
                        setProfileActive(false)
                    }
                }} />
            <Tab.Screen name={'activity'} component={Activity}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => activityActive ? <MaterialCommunityIcons name={'heart'} size={30} color={colors.colors.white} /> : <MaterialCommunityIcons name={'heart-outline'} size={30} color={colors.colors.white} />,

                }}
                listeners={{
                    tabPress: () => {
                        setHomeActive(false)
                        setCinemaActive(false)
                        setExploreActive(false)
                        setActivityActive(true)
                        setProfileActive(false)
                    }
                }} />
            <Tab.Screen name={'profile'} component={Profile}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <Fontisto name={'user-secret'} size={30} />,
                }}
                listeners={{
                    tabPress: () => {
                        setHomeActive(false)
                        setCinemaActive(false)
                        setExploreActive(false)
                        setActivityActive(false)
                        setProfileActive(true)
                    }
                }} />
        </Tab.Navigator>
    )
}


const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                orientation: 'portrait'
            }}>
                <Stack.Screen name={'login'} component={Login} />
                <Stack.Screen name={'signup'} component={Signup} />
                <Stack.Screen name={'dashboard'} component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name={'messageFeed'} component={MessageFeed} options={{
                    headerShown: true,
                    headerTitle: 'Jack Sparrow',
                    headerStyle: { backgroundColor: colors.colors.black },
                    headerTitleStyle: { color: colors.colors.white },
                    headerTintColor: colors.colors.white,  // used to change color of the header text as well as the icons i.e back button and right icons if specified. 
                }} />
                <Stack.Screen name={'messages'} component={MessageListComponent} options={{
                    headerShown: true,
                    headerTitle: 's1mple',
                    headerStyle: { backgroundColor: colors.colors.black },
                    headerTitleStyle: { color: colors.colors.white },
                    headerTintColor: colors.colors.white
                }} />
                <Stack.Screen name={'camera'} component={Camera} options={{
                    animation: 'slide_from_left',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation