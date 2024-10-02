import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, ReactNode, useMemo, useState } from "react";

interface ColorModeContextType {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

interface ToggleColorModeProps {
  children: ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
