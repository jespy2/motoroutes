import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useAppSelector } from "../redux/hooks";

import Header from "../components/Header";
import Card from "../components/Card";

import { mockData } from "../mockdata";
import { IRoute, IRoutesProps } from "../types";

export default function Routes({navigation, route}: IRoutesProps) {
	const { routes } = useAppSelector(state => state.routes)
	console.log(routes)
	return (
		<View style={styles.container}>
		<Pressable onPress={() => navigation.navigate("Home")}>
			<Header />
		</Pressable>
			<ScrollView>
				{routes.map((route, idx) => (
					<Card key={idx} route={route} />
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3C5B6F",
		flex: 1,
		alignItems: "center",
	},
});
