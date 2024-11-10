import { Party } from "../constants/guests";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CURRENT_PARTY_KEY = "current_party";

export const storeCurrentParty = async (party: Party) => {
  try {
    await AsyncStorage.setItem(CURRENT_PARTY_KEY, JSON.stringify(party));
  } catch (e) {
    // save error
  }
};

export const getOfflineCurrentParty = async () => {
  try {
    const result = await AsyncStorage.getItem(CURRENT_PARTY_KEY);

    if (result) {
      return JSON.parse(result) as Party;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export const removeCurrentParty = async () => {
  try {
    await AsyncStorage.removeItem(CURRENT_PARTY_KEY);
  } catch (e) {
    // save error
  }
};
