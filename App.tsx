import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Routes from "./pages/Routes";
import AddRoute from "./pages/AddRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false}}>
				<Stack.Screen
					name="Home"
					component={Home}
				/>
				<Stack.Screen
					name="AddRoute"
					component={AddRoute}
				/>
				<Stack.Screen
					name="Routes"
					component={Routes}
				/>
			</Stack.Navigator>
		</NavigationContainer>
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
