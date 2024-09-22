import { createContext, useContext, useEffect, useState } from "react";
import { getRSVP, removeRSVP, storeRSVP } from "../data/rsvp";
import { RSVP } from "../data/rsvp";

export interface RSVPContext {
  rsvp: RSVP | null | undefined;
  setRSVP: (rsvp: RSVP | null) => Promise<void>;
  isLoading: boolean;
}

const RSVPContext = createContext<RSVPContext>({
  rsvp: null,
  setRSVP: async () => {},
  isLoading: true,
});

export interface RSVPProviderProps {
  children: React.ReactNode;
}

export const RSVPProvider = ({ children }: RSVPProviderProps) => {
  const [rsvp, _setRSVP] = useState<RSVP | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentRSVP = async () => {
      const storedRSVP = await getRSVP();

      _setRSVP(storedRSVP);
      setIsLoading(false);
    };

    getCurrentRSVP();
  }, []);

  const setRSVP = async (rsvp: RSVP | null) => {
    console.log("setRSVP:", rsvp);
    if (rsvp) {
      console.log("storeRSVP");
      await storeRSVP(rsvp);
    } else {
      await removeRSVP();
    }
    console.log("_setRSVP:");
    _setRSVP(rsvp);
  };

  const value: RSVPContext = {
    setRSVP,
    rsvp,
    isLoading,
  };

  return <RSVPContext.Provider value={value}>{children}</RSVPContext.Provider>;
};

export const useRSVP = () => {
  return useContext(RSVPContext);
};
