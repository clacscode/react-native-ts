import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.containter}>
      {/* <Text style={styles.title}>Hola</Text> */}
      <View style={styles.purpleBox}>
        <Text style={styles.title}>Hola</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    flex: 1,
    fontSize: 50,
    borderWidth: 10,
    margin: 50,
    color: 'white',
    padding: 10,

  },
  purpleBox: {
    flex: 0.7,
    textAlign: 'center',
    backgroundColor: 'purple'
  }
})
