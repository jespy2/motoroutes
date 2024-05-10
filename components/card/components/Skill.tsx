import { useState } from "react";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import {
	Entypo,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ICardProps } from "../../../types";

export default function Skill({ props }: { props: ICardProps }) {
	const [showDifficultyAttributes, setShowDifficultyAttributes] =
		useState<boolean>(false);
	const [showHazardsAttributes, setShowHazardsAttributes] =
		useState<boolean>(false);
	const { route } = props;
	const {
		difficulty,
		difficulty_attributes,
		hazards,
		hazards_attributes,
	} = route;

	return (
		<View style={styles.container}>
    <Text style={styles.sectionTitle}>Skill</Text>
			<Text style={styles.sectionSubtitle}>click links to see more</Text>
			<View style={styles.subContainer}>
				<Pressable
					onPress={() => {
						setShowHazardsAttributes(false);
						setShowDifficultyAttributes(!showDifficultyAttributes);
					}}
				>
					<Text style={styles.label}>
						<Entypo name='gauge' style={styles.icon} /> Difficulty Level: {difficulty}
					</Text>
				</Pressable>
				<Pressable
					onPress={() => {
						setShowDifficultyAttributes(false);
						setShowHazardsAttributes(!showHazardsAttributes);
					}}
				>
					<Text style={styles.label}>
						<MaterialCommunityIcons name='hazard-lights' style={styles.icon} /> Hazard Level: {hazards}
					</Text>
				</Pressable>
			</View>
			{(showDifficultyAttributes || showHazardsAttributes) && (
				<View>
					{showDifficultyAttributes && (
						<View style={styles.attributeContainer}>
							{difficulty_attributes?.map((attr) => (
								<Text style={styles.attributeItem}>
									<Entypo name='gauge' style={styles.attributeIcon} />:{" "}
									{attr.charAt(0).toUpperCase() + attr.slice(1)}
								</Text>
							))}
						</View>
					)}
					{showHazardsAttributes && (
						<View style={styles.attributeContainer}>
							{hazards_attributes?.map((attr) => (
								<Text style={styles.attributeItem}>
									<MaterialCommunityIcons
										name='hazard-lights'
										style={styles.attributeIcon}
									/>
									: {attr.charAt(0).toUpperCase() + attr.slice(1)}
								</Text>
							))}
						</View>
					)}
				</View>
			)}
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
	subContainer: {
		flexDirection: "row",
		marginTop: 10,
		alignItems: "center",
		justifyContent: "space-around",
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
	attributeContainer: {
		marginVertical: 10,
		marginHorizontal: 5,
		padding: 5,
		backgroundColor: "#948979",
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
	},
});
