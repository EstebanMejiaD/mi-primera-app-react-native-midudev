import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10
    },
    text: {
        color: theme.appBar.primaryText
    }
})


const AppBar = () => {
    return ( 
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Repositories App Mobile 
            </StyledText>
        </View>
    )
}

export default AppBar