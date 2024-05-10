import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import Notes from "../Notes";
import Videos from "../Videos";
import Stats from "./components/Stats";
import Skill from "./components/Skill";
import MoreInfo from "./components/MoreInfo";
import { ICardProps } from "../../types";

export default function Card(props: ICardProps) {
	const [showNotes, setShowNotes] = useState<boolean>(false);
	const [showVideos, setShowVideos] = useState<boolean>(false);
	const { route } = props;
	const {
		ride,
		notes,
		videos,
	} = route;

	const toggleShowMoreInfo = (infoType: string) => {
		if (infoType === 'notes') setShowNotes(!showNotes);
		if (infoType === 'videos')setShowVideos(!showVideos)
	}

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
				<Stats props={props} />
				<Skill props={props} />
				<MoreInfo props={props} toggleShowMoreInfo={toggleShowMoreInfo} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DFD0B8",
		borderRadius: 5,
		marginVertical: 10,
		marginHorizontal: 4,
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
});
