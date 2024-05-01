import { NavigationProp, RouteProp } from "@react-navigation/native";

export type StackParamList = {
  Home: undefined;
  AddRoute: undefined;
  Routes: undefined;
};

type HomeScreenNavigationProp = NavigationProp<StackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;

export interface IHomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
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