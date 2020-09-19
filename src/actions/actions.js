import * as types from "./types";
export function addFeature(id) {
  return { type: types.ADD_FEATURE, payload: { id } };
}
export function removeFeature(id) {
  return { type: types.REMOVE_FEATURE, payload: { id } };
}
