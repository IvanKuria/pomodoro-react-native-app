import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Streaks = () => {
  return (
    <View style={styles.streakContainer}>
      <Text style={styles.streakText}>Streak #1</Text>
    </View>
  )
}

export default Streaks

const styles = StyleSheet.create({
    streakContainer: {
        marginTop: 70,

    },
    streakText: {
        color: "white",
        fontSize: 25,
    }
})