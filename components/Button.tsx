import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface IButtonProps {
  onPress: () => void;
  title: string;
  type?: string;
  accessibilityLabel: string;
}

const Button = ({ onPress, title, type, accessibilityLabel }: IButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={type === 'dark' ? styles.darkButtonContainer : styles.buttonContainer}
    >
    <Text style={type === 'dark' ? styles.darkButtonText : styles.buttonText}
    accessibilityLabel={accessibilityLabel}
    >{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DFD0B8",
    borderRadius: 5
  },
  darkButtonContainer: {
    backgroundColor: "#3C5B6F",
    borderRadius: 5,
    textAlign: 'center'
  },
  buttonText: {
    color: "#3C5B6F",
    padding: 10,
    textAlign: 'center'
  },
  darkButtonText: {
    color: "#DFD0B8",
    padding: 10,
    textAlign: 'center'
  }
});

export default Button;