import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: "one",
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = stepSlice.actions;
export const currentStepSelector = (state: { step: { currentStep: string } }) =>
  state.step.currentStep;
export default stepSlice.reducer;
