"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AppState {
  home: boolean;
  about: boolean;
  talk: boolean;
  token: boolean;
}

interface AppContextProps {
  state: AppState;
  toggleState: (key: keyof AppState) => void;
}

export const AppContext = createContext<AppContextProps>({
  state: {
    home: true,
    about: false,
    talk: false,
    token: false,
  },
  toggleState: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState({
    home: true,
    about: false,
    talk: false,
    token: false,
  });

  const toggleState = (key: keyof AppState) => {
    console.log(state);
    setState({
      home: false,
      about: false,
      talk: false,
      token: false,
      [key]: true, // Ensure only the clicked state is true
    });
  };

  return (
    <AppContext.Provider value={{ state, toggleState }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
