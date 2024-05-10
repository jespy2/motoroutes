import {
	Linking,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	Feather,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ICardProps } from "../../../types";

export default function MoreInfo({
  props,
  toggleShowMoreInfo 

}: {
    props: ICardProps,
    toggleShowMoreInfo: (infoType: string) =>  void
}) {
	const { route } = props;
	const {
		map,
	} = route;

	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>More Info</Text>
			<Text style={styles.sectionSubtitle}>click links to see more</Text>
			<View style={styles.linksContainer}>
				<TouchableOpacity onPress={() => Linking.openURL(map)}>
					<Text style={styles.label}>
						<FontAwesome5 name='directions' style={styles.icon} /> Launch Map
					</Text>
				</TouchableOpacity>
				<Pressable onPress={() => toggleShowMoreInfo('notes')}>
					<Text style={styles.label}>
						<MaterialCommunityIcons
							name='notebook-outline'
							style={styles.icon}
						/>{" "}
						Show Notes
					</Text>
				</Pressable>
				<Pressable onPress={() => toggleShowMoreInfo('videos')}>
					<Text style={styles.label}>
						<Feather name='video' style={styles.icon} /> Videos
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderColor: "#3C5B6F",
		borderWidth: .5,
		margin: 4,
		borderRadius: 5,
		paddingVertical: 10,
	},
	linksContainer: {
		backgroundColor: "#DFD0B8",
		flexDirection: "row",
		alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
	},
	sectionTitle: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
		fontWeight: "bold",
	},
	sectionSubtitle: {
		paddingHorizontal: 10,
    color: "#3C5B6F",
    fontSize: 10
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
