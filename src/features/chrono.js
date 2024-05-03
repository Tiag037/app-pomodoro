import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "Work",
  },
};

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducer: {
    updateChronoValues: (state, action) => {
      //choix du state "session" ou "pause"
      const chosenState = state[action.payload.type];
      //on bloque en dessous de 1
      if (chosenState.value + action.payload.value === 0) return;
      //pour modifier work en meme temps que l'on modifie session (quand le chrono ne tourne pas)
      if (action.payload.type === "session") {
        if (state.session.value === state.session.runningValue) {
          chosenState.value = chosenState.value + action.payload.value;
          chosenState.runningValue =
            chosenState.runningValue + action.payload.value;
          state.displayedValue.value = chosenState.runningValue;
        }
      }
    },
  },
});

export const { updateChronoValues } = chrono.actions;
export default chrono.reducer;
