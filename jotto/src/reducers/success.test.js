import { success } from "./success";
import { actionTypes } from "../actions";
describe("reducers should return state", () => {
  test(" null when no action is dispatched", () => {
    const finalState = success(undefined, {});
    expect(finalState).toBe(false);
  });
  test("true when correct word is guessed", () => {
    const finalState = success(undefined, { type: actionTypes.CORRECT_GUESS });

    expect(finalState).toBe(true);
  });
});
