import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tabs = () => {
  return (
    <View style={styles.titlesContainer}>
      <TouchableOpacity style={styles.titlesButton}>
        <Text style={styles.titlestext}>
          Pomodoro
        </Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.titlesButton}>
        <Text style={styles.titlestext}>
          TikTok Break
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.titlesButton}>
        <Text style={styles.titlestext}>
          Long Break
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
  titlesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
  },
  titlestext: {
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "normal",
    marginRight: 5,
    marginLeft: 5,
    color: "white",
  },
  titlesButton: {
    margin: 0,
    borderRadius: 4,
    paddingTop: 3,
    height: 28,
    boxShadow: "none",
    color: "gray",
    opacity: 1,
    backgroundColor: "rgba(201, 194, 198, 0.8)"
  }
})