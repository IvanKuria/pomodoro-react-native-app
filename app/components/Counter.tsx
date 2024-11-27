import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './Tabs'
import StartReset from './StartReset'
import Streaks from './Streaks'

const Counter = () => {
  return (
    <View style={styles.allCounterContainer}>
      <Tabs />
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>00:00</Text>
      </View>
      <StartReset />
      <Streaks />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    allCounterContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 6,

    },
    counterContainer: {
        marginTop: 70,
    }, 
    counterText: {
        fontSize: 100,
        color: "white"
    }
})