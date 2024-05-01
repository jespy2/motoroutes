import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Routes() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Card />
      <Card />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C5B6F",
    flex: 1,
    alignItems: 'center'
  },
})
