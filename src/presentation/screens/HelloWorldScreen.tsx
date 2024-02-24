import { StyleSheet, Text, View } from "react-native"

interface Props {
  nombre: string;
}

export const HelloWorldScreen = ({ nombre = 'World' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {nombre}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20
  }
})
