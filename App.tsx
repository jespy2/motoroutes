import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Form from './components/Form';
import Header from "./components/Header";

export default function App() {

	return (
		<View style={styles.container}>
			<Header />
      <Form />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		marginTop: 20,
	},
	heading: {
		marginBottom: 10,
		fontSize: 20,
		fontWeight: "900",
	},
});
