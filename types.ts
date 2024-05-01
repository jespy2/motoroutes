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

export interface IHomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}
export interface IRoutesProps {
  navigation: RoutesScreenNavigationProp;
  route: RoutesScreenRouteProp;
}

export interface INotesProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  notes: string;
  ride: string;
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