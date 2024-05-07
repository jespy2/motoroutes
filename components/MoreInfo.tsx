import { PropsWithChildren, useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import Tooltip from "./Tooltip";
import { TooltipState } from "../types";

export default function MoreInfo({ children }: PropsWithChildren) {
	const [tooltip, setTooltip] = useState<TooltipState>({
		show: false,
		pos: { x: 0, y: 0 },
	});
	const viewRef = useRef<View>();
	return (
		<View
			ref={viewRef}
			onLayout={() => {
				viewRef?.current?.measure((x, y, width, height, pageX, pageY) => {
					console.log("view", x, y, width, height, pageX, pageY);
					setTooltip({...tooltip, pos: {x: pageX, y: pageY}});
				});
			}}
		>
			<TouchableOpacity onPress={() => setTooltip({ ...tooltip, show: true })}>
				<Feather name='info' size={24} color='#3C5B6F' />
			</TouchableOpacity>
			{tooltip.show && (
				<Tooltip setTooltip={setTooltip} tooltip={tooltip}>
					{children}
				</Tooltip>
			)}
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
