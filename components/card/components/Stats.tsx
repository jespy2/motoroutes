import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import {
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ICardProps } from '../../../types';

export default function Stats({props}: {props: ICardProps}) {
  const { route } = props;
	const {
		time,
		distance,
  } = route;
  
  return (
    <View style={styles.container}>
				<Text style={styles.sectionTitle}>Stats</Text>
				<View style={styles.subContainer}>
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
					</View>					
					</View>
  )
};


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
