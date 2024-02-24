import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { PrimaryButton } from '../components/index'

export const CounterScreen = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.text}>{count}</Text>

      <PrimaryButton label='+1' onPress={() => setCount(count + 1)} />

      {count !== 0 && (
        <PrimaryButton label='-1' onPress={() => setCount(count - 1)} />
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 60,
    color: 'black',
    fontWeight: '300'
  }
})
