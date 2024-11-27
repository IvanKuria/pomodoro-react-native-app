import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'


const index = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Counter />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "black",
  }
})