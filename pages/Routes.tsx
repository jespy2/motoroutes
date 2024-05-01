import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { mockData } from "../mockdata";
import { IRoute } from "../types";

export default function Routes() {
	const routes: IRoute[] = mockData;
	return (
		<View style={styles.container}>
    <Header />
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
