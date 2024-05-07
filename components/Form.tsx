import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "./Button";
import MoreInfo from "./MoreInfo";
export interface IRoute {
	name: string;
	difficulty: string;
	duration: string;
	risks: string;
	notes: string;
	mapUrl: string;
}

export default function Form() {
	const [name, onChangeName] = useState<string>("");
	const [difficulty, onChangeDifficulty] = useState<string>("");
	const [duration, onChangeDuration] = useState<string>("");
	const [risks, onChangeRisks] = useState<string>("");
	const [notes, onChangeNotes] = useState<string>("");
	const [mapUrl, onChangeMapUrl] = useState<string>("");

	const handleSubmit = () => {
		const newRoute: IRoute = {
			name: name,
			difficulty: difficulty,
			duration: duration,
			risks: risks,
			notes: notes,
			mapUrl: mapUrl,
		};
		console.log(newRoute);
	};

	return (
		<View style={styles.form}>
			<Text style={styles.heading}>Add a ride to your routes collection: </Text>

			<TextInput
				style={styles.input}
				onChangeText={onChangeName}
				value={name}
				placeholder='Name your new route'
			/>

			<View style={styles.inputWithInfo}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeDifficulty}
					value={difficulty}
					placeholder='Difficulty on 1-10 scale'
					keyboardType='numeric'
				/>
				<MoreInfo>
					<Text style={styles.infoText}>
						<Text style={styles.infoTextBold}>1 Easy: </Text> Granny on a Hayabusa
						could do it
						<Text style={styles.infoTextBold}>10 Difficult:</Text> Better cover
						yourself in bubble wrap
					</Text>
				</MoreInfo>
			</View>

			<View style={styles.inputWithInfo}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeDuration}
					value={duration}
					placeholder='Trip length in hours'
					keyboardType='numeric'
				/>
				<MoreInfo>
					<Text style={styles.infoText}>
						Give in hours. Ex. 1.25 for an hour and fifteen minutes
					</Text>
				</MoreInfo>
			</View>

			<TextInput
				style={styles.input}
				onChangeText={onChangeRisks}
				value={risks}
				placeholder='Describe risks to look out for'
			/>

			<TextInput
				style={styles.input}
				onChangeText={onChangeNotes}
				value={notes}
				placeholder='Notes: Anything else to remember?'
			/>

			<View style={styles.inputWithInfo}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeMapUrl}
					value={mapUrl}
					placeholder='Paste Google Maps URL'
				/>
				<MoreInfo>
					<Text style={styles.infoTextBold}>How to copy your map URL:</Text>
					<Text style={styles.infoText}>
						When you have your route, tap the 3 dots next to the starting point
					</Text>
					<Text style={styles.infoText}>Tap "Share Directions"</Text>
					<Text style={styles.infoText}>Select "Copy to clipboard "</Text>
				</MoreInfo>
			</View>

			<Button
				title='Submit Route'
				accessibilityLabel='submit new route'
				onPress={handleSubmit}
				type='dark'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		marginBottom: 10,
		fontSize: 20,
		fontWeight: "900",
	},
	form: {
		marginTop: 10,
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "#DFD0B8",
		paddingVertical: 35,
		paddingHorizontal: 5,
		borderRadius: 20,
	},
	input: {
		height: 40,
		marginTop: 30,
		borderWidth: 1,
		padding: 10,
	},
	label: {
		fontSize: 12,
	},
	labelBold: {
		fontWeight: "700",
	},
	infoText: {
		fontSize: 12,
		color: '#DFD0B8'
	},
	infoTextBold: {
		fontWeight: "700",
	},
	inputWithInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
});
