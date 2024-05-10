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

export type difficulty = 0 | 1 | 2;
export type hazards = 0 | 1 | 2;
export type difficulty_attributes =
  'twisties' |
  'elevation changes (grades)' |
  'speed limits' |
  'road conditions';

export type hazards_attributes =
  'road quality' |
  'visibility' |
  'typical weather' |
  'traffic' |
  'wildlife';

export interface IRoute {
  ride: string;
  difficulty: difficulty;
  difficulty_attributes?: difficulty_attributes[];
  difficulty_notes?: string;
  hazards: hazards;
  hazards_attributes?: hazards_attributes[];
  hazards_notes?: string;
  time: number;
  distance: number;
  notes?: string;
  map: string;
  gallary?: string[];
  videos?: string[];
}

export type TooltipState = {
	show: boolean;
	pos: { x: number, y: number }
}

export interface ICardProps {
	key: number;
	route: IRoute;
}