import { Pressable, StyleSheet, View } from "react-native";
import Form from "../components/Form";
import Header from "../components/Header";
import { IAddRouteProps } from "../types";

export default function AddRoute({navigation, route}: IAddRouteProps) {
  return (
    <View style={styles.container}>
		<Pressable onPress={() => navigation.navigate("Home")}>
			<Header />
		</Pressable>
      <Form />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C5B6F",
		flex: 1,
		alignItems: "center",
	},
});