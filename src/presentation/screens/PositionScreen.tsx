import { StyleSheet, Text, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={{
        ...styles.orangeBox,
        top: -100,
        left: -100
      }}></View>
      <View style={{
        ...styles.purpleBox,
        top: -100
      }}></View>
      <View style={styles.box}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    // top: 0
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    left: 100
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    top: -300
  }
})