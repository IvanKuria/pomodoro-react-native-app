import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const StartReset = () => {
  return (
    <View style={styles.startPauseResetContainer}>
      <TouchableOpacity style={styles.startPauseResetButton}>
        <Text style={styles.buttonText}>
            Start
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startPauseResetButton}>
        <Text style={styles.buttonText}>
            Reset
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartReset

const styles = StyleSheet.create({
    startPauseResetContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 70,
        marginTop: 50,
    }, 
    startPauseResetButton: {
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: 'white',
        height: 55,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        shadowColor: 'rgb(235, 235, 235)', // Equivalent box-shadow
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 3,
    },
    buttonText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30,
        paddingLeft: 10,
        paddingRight: 10,
    }
})