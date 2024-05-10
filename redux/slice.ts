import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRoute } from "../types";

const initRoutes:  IRoute[] = [
  {
    ride: "40 Switchback Loop",
    difficulty: 2,
    difficulty_attributes: ['elevation changes (grades)', 'speed limits', 'twisties'],
    difficulty_notes: '',
    hazards: 2,
    hazards_attributes: ['typical weather','visibility', 'wildlife'],
    time: 7.5,
    distance: 327,
    map: "https://maps.app.goo.gl/VaxkBJ7V5sNGXHTX9",
    notes: "Big elevation changes, big twisty variety (mountain passes, tight canyons, fast hwys), long high plains straight-aways, amazing views, sweet switchbacks",
    videos: ["https://youtu.be/P465wZc5tro","https://youtu.be/suS6-fh7LX0"]
  },
  {
    ride: "Estes Park and Back",
    difficulty: 1,
    hazards: 1,
    time: 2.25,
    distance: 86,
    map: "https://maps.app.goo.gl/E3GYMDzkZMvEBAu28",
    notes: "Ranchlands and sweet canyons, beautiful mountain town",
    videos: [""]
  },
  {
    ride: "Cameron Pass  and Back",
    difficulty: 2,
    hazards: 2,
    time: 3.75,
    distance: 145,
    map: "https://www.google.com/maps/dir/2913+Denver+Drive,+Fort+Collins,+CO/Cameron+Pass,+Colorado/2913+Denver+Drive,+Fort+Collins,+CO/@40.6174323,-105.4570376,10z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!1m5!1m1!1s0x8769a23bedffbd5b:0x18c52adb90ca8938!2m2!1d-105.8925128!2d40.5208158!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!3e0?entry=ttu",
    notes: "Up Poudre Canyon and back. Tight canyon twisties, big mountain twisities, resevoire.  10K pass",
    videos: ["https://youtu.be/bWAbirfkBMs","https://youtu.be/K-2dU_HKV6c"]
  },
  {
    ride: "Peak to Peak",
    difficulty: 1,
    hazards: 1,
    time: 5,
    distance: 208,
    map: "https://www.google.com/maps/dir/2913+Denver+Drive,+Fort+Collins,+CO/Estes+Park,+CO/Black+Hawk,+CO/Estes+Park,+CO/2913+Denver+Drive,+Fort+Collins,+CO/@40.173937,-105.2825524,10z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059!1m5!1m1!1s0x876bbc7a8ccbb8fb:0x4935b9a9c9693666!2m2!1d-105.4938853!2d39.7969322!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!3e0?entry=ttu",
    notes: "Add amazing, long mountain views to the Estes Park and back ride",
    videos: ["https://youtu.be/r6mSFCAIVPk","https://youtu.be/sd0s2HCslTU","https://youtu.be/WgCD6Hz3h68"]
  },
  {
    ride: "Laramie/Walden Loop",
    difficulty: 1,
    hazards: 1,
    time: 5,
    distance: 238,
    map: "https://www.google.com/maps/dir/2913+Denver+Drive,+Fort+Collins,+CO/Laramie,+WY/Walden,+CO/Kinikinik,+CO/2913+Denver+Drive,+Fort+Collins,+CO/@40.910817,-105.6672329,9z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!1m5!1m1!1s0x876884f78eda9b79:0x8e89c1f7a1c4e593!2m2!1d-105.5911007!2d41.3113669!1m5!1m1!1s0x874271bb45f0748b:0xe1b4181054b57f37!2m2!1d-106.2836373!2d40.7316433!1m5!1m1!1s0x876907abaa07d03d:0xd9141f1fd80f78a5!2m2!1d-105.7380601!2d40.7124803!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!3e0?entry=ttu",
    notes: "Last 15-40 minutes to Laramie is typically very windy.  Fantastic mountain twisity view and long vistas",
    videos: ["https://youtu.be/rt6e4Q_hJr8","https://youtu.be/tyrJVkaHdIA","https://youtu.be/Oig28-jw3_8"]
  },
  {
    ride: "Easy Dam Loop",
    difficulty: 0,
    hazards: 0,
    time: 1,
    distance: 35,
    map: "https://www.google.com/maps/dir/2913+Denver+Drive,+Fort+Collins,+CO/40.5347548,-105.1422936/Ted's+Place,+CO/2913+Denver+Drive,+Fort+Collins,+CO/@40.5943444,-105.1050487,12z/data=!3m1!4b1!4m21!4m20!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!1m0!1m5!1m1!1s0x87693730e09f20f3:0xd1e92aa7acd6cd39!2m2!1d-105.1887493!2d40.6637975!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!3e0?entry=ttu",
    notes: "Stunning views of Horsetooth Resevoir and Fort Collins",
    videos: [""]
  },
  {
    ride: "Easy Ranch Loop",
    difficulty: 0,
    hazards: 0,
    time: 1.5,
    distance: 45,
    map: "https://maps.app.goo.gl/GUydXTag6gFKnz8QA",
    notes: "Horsetooth and Green Ridge Glade  Resevoirs, great views of tectonic slippage, cool canyon u-turn, ranch land",
    videos: [""]
  },
  {
    ride: "27 Loop",
    difficulty: 1,
    hazards: 2,
    time: 2.75,
    distance: 82,
    map: "https://www.google.com/maps/dir/2913+Denver+Drive,+Fort+Collins,+CO/Masonville,+CO/40.6827664,-105.389303/Ted's+Place,+CO/2913+Denver+Drive,+Fort+Collins,+CO/@40.6575112,-105.4020797,13.13z/data=!4m37!4m36!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!1m15!1m1!1s0x87694f6700cbf381:0xfc3ba3ee2acf0aa9!2m2!1d-105.2108177!2d40.4874831!3m4!1m2!1d-105.3468475!2d40.6069272!3s0x87693f1cead28409:0x9ac9cee0312a2b3!3m4!1m2!1d-105.2997154!2d40.5611823!3s0x87694746042f0267:0xcecb0ef96a354fae!1m0!1m5!1m1!1s0x87693730e09f20f3:0xd1e92aa7acd6cd39!2m2!1d-105.1887493!2d40.6637975!1m5!1m1!1s0x876eb4b6e7b2ddf7:0xc0059320ca1b056c!2m2!1d-105.0242294!2d40.5507703!3e0?entry=ttu",
    notes: "Excellent route with a varity of twisties.  27 can get squirrely with ice, snow, and sand that lingers after the snow melts.",
    videos: ["https://youtu.be/_Dw1b3mS53A"]
  },
  {
    ride: "Loveland, Ranchland, Twisty Loop",
    difficulty: 1,
    hazards: 2,
    time: 2.75,
    distance: 102,
    map: "https://maps.app.goo.gl/tpsay3nW62FT18Ki8",
    notes: "Good mix of NoCo terrain",
    videos: [""]
  },
  {
    ride: "Ramsay-Shockey Open Space Loop",
    difficulty: 1,
    hazards: 1,
    time: 2.75,
    distance: 96,
    map: "https://maps.app.goo.gl/ZQgsaqiQv2QD7HP67",
    notes: "Good mix of NoCo terrain",
    videos: [""]
  },
  {
    ride: "Craig",
    difficulty: 1,
    hazards: 2,
    time: 4.25,
    distance: 203,
    map: "https://maps.app.goo.gl/MVFwNtsRfsQpiawn7",
    notes: "Rode this with Imogen for her first over-night trip.  Excellent diversity in geography and road types, along with elevation changes.  We took it there and back, but could also return through Wyoming to make it a loop (very long day).  Steamboat can get a bit trafficky.",
    videos: [""]
  }
];

interface IState {
  routes: IRoute[];
  error: boolean | null;
  isPending: boolean | null;
}

const initialState: IState = {
  routes: initRoutes,
  error: null,
  isPending: null,
}

// export const fetchRoutes = createAsyncThunk

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    
  }
});

export const { reducer: routesReducer } = routesSlice;