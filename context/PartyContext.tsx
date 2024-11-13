import { createContext, useContext, useEffect, useState } from "react";
import { Party } from "../constants/guests";
import {
  getOfflineCurrentParty,
  removeCurrentParty,
  storeCurrentParty,
} from "../data/currentParty";

export interface PartyContext {
  currentParty: Party | null | undefined;
  setCurrentParty: (party: Party | null) => Promise<void>;
  isLoading: boolean;
}

const PartyContext = createContext<PartyContext>({
  currentParty: null,
  setCurrentParty: async () => {},
  isLoading: true,
});

export interface PartyProviderProps {
  children: React.ReactNode;
}

export const PartyProvider = ({ children }: PartyProviderProps) => {
  const [currentParty, _setCurrentParty] = useState<Party | null | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentParty = async () => {
      const storedParty = await getOfflineCurrentParty();
      console.log("getCurrentParty:", storedParty);

      _setCurrentParty(storedParty);
      setIsLoading(false);
    };

    getCurrentParty();
  }, []);

  // useProtectedRoute(currentParty);

  const setCurrentParty = async (party: Party | null) => {
    console.log("setCurrentParty:", party);
    if (party) {
      await storeCurrentParty(party);
    } else {
      await removeCurrentParty();
    }
    _setCurrentParty(party);
  };

  const value: PartyContext = {
    setCurrentParty,
    currentParty,
    isLoading,
  };

  return (
    <PartyContext.Provider value={value}>{children}</PartyContext.Provider>
  );
};

export const useParty = () => {
  return useContext(PartyContext);
};
