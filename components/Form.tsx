import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from "./Button";
import MoreInfo from "./MoreInfo";
import { IRoute, difficulty, hazards } from "../types";

export default function Form() {
	const [name, onChangeName] = useState<string>("");
	const [difficulty, onChangeDifficulty] = useState<difficulty>(1);
	const [hazards, onChangeHazards] = useState<difficulty>(1);
	const [hour, onChangeHour] = useState<number>(0);
	const [minute, onChangeMinute] = useState<number>(0);
	const [distance, onChangeDistance] = useState<number>(0);
	const [notes, onChangeNotes] = useState<string>("");
	const [map, onChangeMap] = useState<string>("");
	const [videos, onChangeVideos] = useState<string[]>([""]);

	const handleSubmit = () => {
		const floatedMinutes = parseFloat((minute / 60).toString());
		const newRoute: IRoute = {
			ride: name,
			difficulty: difficulty,
			hazards: hazards,
			time: parseInt(hour.toString()) + (minute / 60.0),
			distance: distance,
			notes: notes,
			map: map,
			videos: videos,
		};
		console.log(newRoute)
	};

	const infoText = {
		difficulty: (
			<>
				<Text style={styles.infoText}>
					<Text style={styles.infoTextBold}>1 Easy: </Text> Granny on a Hayabusa
					could do it
				</Text>
				<Text style={styles.infoText}>
					<Text style={styles.infoTextBold}>10 Difficult:</Text> Better cover
					yourself in bubble wrap
				</Text>
			</>
		),
		hours: (
			<Text style={styles.infoText}>
				Give in hours. Ex. 1.25 for an hour and fifteen minutes
			</Text>
		),
		maps: (
			<>
				<Text style={styles.infoTextBold}>How to copy your map URL:</Text>
				<Text style={styles.infoText}>
					When you have your route, tap the 3 dots next to the starting point
				</Text>
				<Text style={styles.infoText}>Tap "Share Directions"</Text>
				<Text style={styles.infoText}>Select "Copy to clipboard "</Text>
			</>
		),
	};

	const timeOptions = {
		hour: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], 
		minute: ["0", "15", "30", "45"]
	}

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
				<MoreInfo>{infoText.difficulty}</MoreInfo>
			</View>

			<View style={styles.inputWithInfo}>



				<SelectDropdown
					data={timeOptions.hour}
					onSelect={(selectedItem, index) => {
						console.log("hour:", selectedItem)
						onChangeHour(selectedItem);
					}}
					renderButton={(selectedItem, isOpened) => {
						return (
							<View style={styles.dropdownButtonStyle}>
								{selectedItem && (
									<Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
								)}
								<Text style={styles.dropdownButtonTxtStyle}>
									{(selectedItem && selectedItem) || 'Hours'}
								</Text>
								<Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
							</View>
						);
					}}
					renderItem={(item, index, isSelected) => {
						return (
							<View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
								<Icon name={item.icon} style={styles.dropdownItemIconStyle} />
								<Text style={styles.dropdownItemTxtStyle}>{item}</Text>
							</View>
						);
					}}
					showsVerticalScrollIndicator={false}
					dropdownStyle={styles.dropdownMenuStyle}
				/>






				<SelectDropdown
					data={timeOptions.minute}
					onSelect={(selectedItem, index) => {
						console.log("minute:", selectedItem)
						onChangeMinute(selectedItem);
					}}
					renderButton={(selectedItem, isOpened) => {
						return (
							<View style={styles.dropdownButtonStyle}>
								{selectedItem && (
									<Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
								)}
								<Text style={styles.dropdownButtonTxtStyle}>
									{(selectedItem && selectedItem) || 'Minutes'}
								</Text>
								<Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
							</View>
						);
					}}
					renderItem={(item, index, isSelected) => {
						return (
							<View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
								<Icon name={item.icon} style={styles.dropdownItemIconStyle} />
								<Text style={styles.dropdownItemTxtStyle}>{item}</Text>
							</View>
						);
					}}
					showsVerticalScrollIndicator={false}
					dropdownStyle={styles.dropdownMenuStyle}
				/>
				{/* <TextInput
					style={styles.input}
					onChangeText={onChangeTime}
					value={time}
					placeholder='Trip length in hours'
					keyboardType='numeric'
				/> */}
				{/* <WheelPicker
					visibleRest={1}
					selectedIndex={timeOptions.hour.indexOf(hour.toString())}
					options={timeOptions.hour}
					onChange={(index) => {
						const value = timeOptions.hour.at(index);
						if (value !== undefined) {
								onChangeHour(parseInt(value));
						}
					}}
				/>
				<WheelPicker
					// visibleRest={1}
					itemHeight={30}
					selectedIndex={timeOptions.minute.indexOf(minute.toString())}
					options={timeOptions.minute}
					onChange={(index) => {
						const value = timeOptions.minute.at(index);
						if (value !== undefined) {
								onChangeMinute(parseInt(value));
						}
				}}
				/> */}
				<MoreInfo>{infoText.hours}</MoreInfo>
			</View>

			<TextInput
				style={styles.input}
				onChangeText={onChangeHazards}
				value={hazards}
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
					onChangeText={onChangeMap}
					value={map}
					placeholder='Paste Google Maps URL'
				/>
				<MoreInfo>{infoText.maps}</MoreInfo>
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
		marginBottom: 30,
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
		marginBottom: 30,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
	},
	label: {
		fontSize: 12,
	},
	labelBold: {
		fontWeight: "700",
	},
	infoText: {
		fontSize: 12,
		color: "#DFD0B8",
		marginVertical: 2,
	},
	infoTextBold: {
		fontWeight: "700",
	},
	inputWithInfo: {
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "center",
		marginLeft: 35,
	},
	dropdownButtonStyle: {
		width: 120,
		height: 50,
		backgroundColor: '#E9ECEF',
		borderRadius: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 12,
	},
	dropdownButtonTxtStyle: {
		flex: 1,
		fontSize: 18,
		fontWeight: '500',
		color: '#151E26',
	},
	dropdownButtonArrowStyle: {
		fontSize: 28,
	},
	dropdownButtonIconStyle: {
		fontSize: 28,
		marginRight: 8,
	},
	dropdownMenuStyle: {
		backgroundColor: '#E9ECEF',
		borderRadius: 8,
	},
	dropdownItemStyle: {
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 8,
	},
	dropdownItemTxtStyle: {
		flex: 1,
		fontSize: 18,
		fontWeight: '500',
		color: '#151E26',
	},
	dropdownItemIconStyle: {
		fontSize: 28,
		marginRight: 8,
	},
});
