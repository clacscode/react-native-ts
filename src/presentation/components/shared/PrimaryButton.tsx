import { Text, StyleSheet, Pressable, Platform } from "react-native"

interface Props {
  label: string;
  onPress?: () => void;
}

const isAndroid: boolean = Platform.OS === 'android';

export const PrimaryButton = ({ label, onPress }: Props) => {

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPresse
      ]}
      onPress={() => onPress && onPress()}>

      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: isAndroid ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    // new
    elevation: 2, // Elevación para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: isAndroid ? 'white' : '#4746AB'
  },
  buttonPresse: {
    backgroundColor: isAndroid ? '#4746AB' : 'white',
    // new
    shadowOpacity: 0
  }
})
