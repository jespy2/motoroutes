import {
	Modal,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Header from "./Header";
import Button from "./Button";
import { INotesProps } from "../types";

export default function Notes({ setShowNotes, notes, ride }: INotesProps) {
	return (
		<View>
			<Modal>
				<View style={styles.container}>
					<Header />
					<View style={styles.subContainer}>
						<ScrollView style={styles.notesContainer}>
							<Text style={styles.title}>{ride}</Text>
							<Text style={styles.sectionTitle}>Notes for this route:</Text>
							<Text style={styles.noteText}>{notes}</Text>
						</ScrollView>
						<Pressable onPress={() => setShowNotes(false)}>
							<Button
								title='close'
								onPress={() => setShowNotes(false)}
								type='dark'
								accessibilityLabel='close notes'
							/>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3C5B6F",
	},
	subContainer: {
		borderColor: "#DFD0B8",
		backgroundColor: "#DFD0B8",
		borderWidth: 2,
		margin: 4,
		borderRadius: 5,
		// paddingVertical: 20,
		paddingHorizontal: 10,
	},
	notesContainer: {
		height: 600,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#3C5B6F",
		paddingHorizontal: 10,
	},
	sectionTitle: {
		fontSize: 25,
		paddingHorizontal: 10,
		color: "#948979",
		fontWeight: "bold",
	},
	noteText: {
		paddingHorizontal: 10,
		color: "#3C5B6F",
		paddingTop: 10,
		paddingBottom: 30,
		fontSize: 20,
	},
	icon: {
		color: "#3C5B6F",
		fontSize: 24,
		paddingRight: 15,
	},
});
