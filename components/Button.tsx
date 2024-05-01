import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface IButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({ onPress, title }: IButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DFD0B8",
    borderRadius: 5
  },
  buttonText: {
    color: "#3C5B6F",
    padding: 10
  }
});

export default Button;