import { TRSVPGuest } from "../components/RSVPGuest";
import { DayOfArrival } from "../components/RSVPModal";

import AsyncStorage from "@react-native-async-storage/async-storage";

const RSVP_KEY = "rsvp";

export interface RSVP {
  partyId: number;
  rsvps: TRSVPGuest[];
  songSuggestions: string;
}

export const storeRSVP = async (data: RSVP) => {
  try {
    console.log("storing rsvp...");
    await AsyncStorage.setItem(RSVP_KEY, JSON.stringify(data));
    console.log("stored rsvp");
  } catch (e) {
    // save error
    console.log("ERROR STORING RSVP:", e);
  }
};

export const getRSVP = async () => {
  try {
    const result = await AsyncStorage.getItem(RSVP_KEY);

    if (result) {
      return JSON.parse(result) as RSVP;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const removeRSVP = async () => {
  try {
    await AsyncStorage.removeItem(RSVP_KEY);
  } catch (e) {
    // save error
  }
};
