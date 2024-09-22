import * as SecureStore from "expo-secure-store";
import { MainGuest, Party } from "../constants/guests";

const CURRENT_PARTY_KEY = "current_party";

export const storeCurrentParty = async (party: Party) => {
  try {
    await SecureStore.setItemAsync(CURRENT_PARTY_KEY, JSON.stringify(party));
  } catch (e) {
    // save error
  }
};

export const getOfflineCurrentParty = async () => {
  try {
    const result = await SecureStore.getItemAsync(CURRENT_PARTY_KEY);

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
    await SecureStore.deleteItemAsync(CURRENT_PARTY_KEY);
  } catch (e) {
    // save error
  }
};
