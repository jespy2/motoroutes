import { StyleSheet, Text, View } from "react-native";
import {
	Entypo,
	Feather,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Card() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>40 Switchback Loop</Text>
			<View style={styles.subContainer}>
				<View style={styles.dataContainer}>
					<Text style={styles.label}>
						<Ionicons name='time' style={styles.icon} /> 7.5 Hrs
					</Text>
					<Text style={styles.label}>
						<MaterialCommunityIcons
							name='map-marker-distance'
							style={styles.icon}
						/>{" "}
						327 Miles
					</Text>
					<Text style={styles.label}>
						<Entypo name='gauge' style={styles.icon} />: 7
					</Text>
				</View>
				<View style={styles.linksContainer}>
					<Text style={styles.label}>
						<FontAwesome5 name='directions' style={styles.icon} /> Launch Map
					</Text>
					<Text style={styles.label}>
						<MaterialCommunityIcons
							name='notebook-outline'
							style={styles.icon}
						/>{" "}
						Show Notes
					</Text>
					<Text style={styles.label}>
						<Feather name='video' style={styles.icon} /> Videos
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DFD0B8",
    borderRadius: 5,
    marginVertical: 10,
	},
	subContainer: {
		borderColor: "#3C5B6F",
		borderWidth: 2,
		margin: 4,
    borderRadius: 5,
    paddingVertical: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#3C5B6F",
    paddingHorizontal: 10,
	},
	dataContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
	},
	linksContainer: {
		flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
	},
	label: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
	},
	icon: {
		color: "#3C5B6F",
    fontSize: 24,
    paddingRight: 15,
	},
});
