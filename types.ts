import { NavigationProp, RouteProp } from "@react-navigation/native";

export type StackParamList = {
  Home: undefined;
  AddRoute: undefined;
  Routes: undefined;
};

type HomeScreenNavigationProp = NavigationProp<StackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
type RoutesScreenNavigationProp = NavigationProp<StackParamList, 'Routes'>;
type RoutesScreenRouteProp = RouteProp<StackParamList, 'Routes'>;
type AddRouteScreenNavigationProp = NavigationProp<StackParamList, 'AddRoute'>;
type AddRouteScreenRouteProp = RouteProp<StackParamList, 'AddRoute'>;

export interface IHomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}
export interface IRoutesProps {
  navigation: RoutesScreenNavigationProp;
  route: RoutesScreenRouteProp;
}
export interface IAddRouteProps {
  navigation: AddRouteScreenNavigationProp;
  route: AddRouteScreenRouteProp;
}

export interface INotesProps {
  setShowNotes: React.Dispatch<React.SetStateAction<boolean>>;
  notes: string;
  ride: string;
}

export interface IVideosProps {
  setShowVideos: React.Dispatch<React.SetStateAction<boolean>>;
  videos: string[];
}

export interface IRoute {
  ride: string;
  time: number;
  distance: number;
  map: string;
  difficulty: number;
  notes?: string;
  videos?: string[];
}

export type TooltipState = {
	show: boolean;
	pos: { x: number, y: number }
}