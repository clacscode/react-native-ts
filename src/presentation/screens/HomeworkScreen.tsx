import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />

      <View style={[styles.box, styles.orangeBox]} />

      <View style={[styles.box, styles.greenBox]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',

    // TODO: Tarea
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: 'purple',
    left: 100

  },
  orangeBox: {
    backgroundColor: 'orange',
    left: 100
  },
  greenBox: {
    backgroundColor: 'green',
    top: 100,
    right: 100
  },
});