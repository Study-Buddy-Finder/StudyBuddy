import React from "react";
export const AppContext = React.createContext({
  user: {},
  selectedSchool_id: "",
  selectedClass_id: "1",
  setSchool: () => {},
});
