import { AnyAction } from "redux";
import { SET_SNACKBAR_MESSAGE, HANDLE_SNACKBAR_CLOSE } from "../actions";
import { Color } from "@material-ui/lab";

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: Color;
}

export const initialSnackbarState: SnackbarState = {
  isOpen: false,
  message: "",
  severity: "info",
};

export const snackbarReducer = (
  state = initialSnackbarState,
  action: AnyAction
): SnackbarState => {
  const { type, payload } = action;
  switch (type) {
    case SET_SNACKBAR_MESSAGE: {
      const { message, severity } = payload;
      return { ...state, message, severity, isOpen: true };
    }
    case HANDLE_SNACKBAR_CLOSE: {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};
