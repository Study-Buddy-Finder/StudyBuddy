import React from "react";
export const AppContext = React.createContext({
  user: {},
  currentSchool_id: "1",
  currentClass_id: "1",
  currentEvent_id: "1",
  setCurrentClass_id: () => {},
  setCurrentSchool_id: () => {},
  setCurrentEvent_id: () => {},
});
