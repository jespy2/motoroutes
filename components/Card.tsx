import { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import {
	Entypo,
	Feather,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { IRoute } from "../types";
import Notes from "./Notes";

export interface ICardProps {
	key: number;
	route: IRoute;
}

export default function Card(props: ICardProps) {
	const [showModal, setShowModal] = useState<boolean>(false)
	const { route } = props;
	const { ride, time, distance, difficulty, map, notes } = route;
	return (
		<View style={styles.container}>
			{showModal && <Notes setShowModal={setShowModal} notes={notes as string} ride={ride}  />}
			<Text style={styles.title}>{ride}</Text>
			<View style={styles.subContainer}>
				<Text style={styles.sectionTitle} >Stats</Text>
				<View style={styles.dataContainer}>
					<Text style={styles.label}>
						<Ionicons name='time' style={styles.icon} /> {time} Hrs
					</Text>
					<Text style={styles.label}>
						<MaterialCommunityIcons
							name='map-marker-distance'
							style={styles.icon}
						/>{" "}
						{distance} Miles
					</Text>
					<Text style={styles.label}>
						<Entypo name='gauge' style={styles.icon} />: {difficulty}
					</Text>
				</View>
					<Text style={styles.sectionTitle}>More Info</Text>
				<View style={styles.linksContainer}>
					<TouchableOpacity onPress={() => Linking.openURL(map)}>
					<Text style={styles.label}>
						<FontAwesome5 name='directions' style={styles.icon} /> Launch Map
					</Text>
					</TouchableOpacity>
					<Pressable onPress={() => setShowModal(!showModal)}>
						<Text style={styles.label}>
						<MaterialCommunityIcons
							name='notebook-outline'
							style={styles.icon}
						/>{" "}
						Show Notes
					</Text>
					</Pressable >
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
		backgroundColor: "#DFD0B8",
		flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
	},
	sectionTitle: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
		fontWeight: 'bold'
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
