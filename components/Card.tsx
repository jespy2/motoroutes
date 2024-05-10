import { useState } from "react";
import {
	FlatList,
	Linking,
	Pressable,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import {
	Entypo,
	Feather,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { IRoute } from "../types";
import Notes from "./Notes";
import Videos from "./Videos";

export interface ICardProps {
	key: number;
	route: IRoute;
}

export default function Card(props: ICardProps) {
	const [showDifficultyAttributes, setShowDifficultyAttributes] =
		useState<boolean>(false);
	const [showHazardsAttributes, setShowHazardsAttributes] =
		useState<boolean>(false);
	const [showNotes, setShowNotes] = useState<boolean>(false);
	const [showVideos, setShowVideos] = useState<boolean>(false);
	const { route } = props;
	const {
		ride,
		time,
		difficulty,
		difficulty_attributes,
		hazards,
		hazards_attributes,
		distance,
		map,
		notes,
		videos,
	} = route;
	return (
		<View style={styles.container}>
			{showNotes && (
				<Notes
					setShowNotes={setShowNotes}
					notes={notes as string}
					ride={ride}
				/>
			)}
			{showVideos && (
				<Videos setShowVideos={setShowVideos} videos={videos as string[]} />
			)}
			<Text style={styles.title}>{ride}</Text>
			<View style={styles.subContainer}>
				<Text style={styles.sectionTitle}>Stats</Text>
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
					<Pressable
						onPress={() => {
							setShowHazardsAttributes(false);
							setShowDifficultyAttributes(!showDifficultyAttributes);
						}}
					>
						<Text style={styles.label}>
							<Entypo name='gauge' style={styles.icon} />: {difficulty}
						</Text>
					</Pressable>
					<Pressable
						onPress={() => {
							setShowDifficultyAttributes(false);
							setShowHazardsAttributes(!showHazardsAttributes);
						}}
					>
						<Text style={styles.label}>
							<MaterialCommunityIcons
								name='hazard-lights'
								style={styles.icon}
							/>
							: {hazards}
						</Text>
					</Pressable>
				</View>
				{(showDifficultyAttributes || showHazardsAttributes) && (
					<View>
						{showDifficultyAttributes && (
							<View style={styles.attributeContainer}>
									{difficulty_attributes?.map((attr) => (
										<Text style={styles.attributeItem}>
										<Entypo name='gauge' style={styles.attributeIcon} />: {attr.charAt(0).toUpperCase() + attr.slice(1)}</Text>
									))}
							</View>
						)}
						{showHazardsAttributes && (
							<View style={styles.attributeContainer}>
									{hazards_attributes?.map((attr) => (
										<Text style={styles.attributeItem}>
										<MaterialCommunityIcons name='hazard-lights' style={styles.attributeIcon} />: {attr.charAt(0).toUpperCase() + attr.slice(1)}</Text>
									))}
							</View>
						)}
					</View>
				)}
				<Text style={styles.sectionTitle}>More Info</Text>
				<View style={styles.linksContainer}>
					<TouchableOpacity onPress={() => Linking.openURL(map)}>
						<Text style={styles.label}>
							<FontAwesome5 name='directions' style={styles.icon} /> Launch Map
						</Text>
					</TouchableOpacity>
					<Pressable onPress={() => setShowNotes(!showNotes)}>
						<Text style={styles.label}>
							<MaterialCommunityIcons
								name='notebook-outline'
								style={styles.icon}
							/>{" "}
							Show Notes
						</Text>
					</Pressable>
					<Pressable onPress={() => setShowVideos(!showVideos)}>
						<Text style={styles.label}>
							<Feather name='video' style={styles.icon} /> Videos
						</Text>
					</Pressable>
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
		alignItems: "center",
		justifyContent: "space-around",
	},
	linksContainer: {
		backgroundColor: "#DFD0B8",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	sectionTitle: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
		fontWeight: "bold",
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
	attributeContainer: {
		marginBottom: 10,
		marginHorizontal: 5,
		padding: 5,
		backgroundColor: '#948979',
		borderRadius: 5,
	},
	attributeItem: {
		paddingHorizontal: 10,
		color: "#DFD0B8",
		marginLeft: 5,
	},

	attributeIcon: {
		color: "#DFD0B8",
		fontSize: 15,
		paddingRight: 15,
	}
});
