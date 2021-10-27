import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CText from '../../../components/CText'
import colors from '../../../utils/colors'


const Cinema: React.FC = ({ navigation }: any) => {
    return(
        <SafeAreaView style={styles.screen}>
            <CText>Cinema</CText>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.colors.black,
    }
    
});

export default Cinema