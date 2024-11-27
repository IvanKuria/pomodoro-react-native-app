import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>TikTokdoro</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 20,

    },
    headerText: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    }
})

