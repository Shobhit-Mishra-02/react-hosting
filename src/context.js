import { createContext } from "react";

//Here I have declared the themeColor context
const themeColor = createContext(["dark", () => {}]);

export default themeColor;
