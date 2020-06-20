import { combineReducers, Reducer } from "redux";

import { PescatriceAction, TYPED } from "./Action";
import { State } from "./State";

export type Text = Readonly<{
  typing: string;
}>;

const initialState: Text = {
  typing: "",
};

export const text: Reducer<Text, PescatriceAction> = (
  state: Text = initialState,
  action: PescatriceAction,
) => {
  switch (action.type) {
    case TYPED: {
      return {
        typing: action.text,
      };
    }
    default: {
      return state;
    }
  }
};

export const reducer: Reducer<State, PescatriceAction> = combineReducers<
  State,
  PescatriceAction
>({
  text,
});
