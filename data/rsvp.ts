import * as SecureStore from "expo-secure-store";
import { TRSVPGuest } from "../components/RSVPGuest";
import { DayOfArrival } from "../components/RSVPModal";

const RSVP_KEY = "rsvp";

export interface RSVP {
  partyId: number;
  rsvps: TRSVPGuest[];
  dayOfArrival: DayOfArrival | null;
}

export const storeRSVP = async (data: RSVP) => {
  try {
    console.log("storing rsvp...");
    await SecureStore.setItemAsync(RSVP_KEY, JSON.stringify(data));
    console.log("stored rsvp");
  } catch (e) {
    // save error
    console.log("ERROR STORING RSVP:", e);
  }
};

export const getRSVP = async () => {
  try {
    const result = await SecureStore.getItemAsync(RSVP_KEY);

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
    await SecureStore.deleteItemAsync(RSVP_KEY);
  } catch (e) {
    // save error
  }
};
