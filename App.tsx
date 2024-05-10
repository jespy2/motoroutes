import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Routes from "./pages/Routes";
import AddRoute from "./pages/AddRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='AddRoute' component={AddRoute} />
					<Stack.Screen name='Routes' component={Routes} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
