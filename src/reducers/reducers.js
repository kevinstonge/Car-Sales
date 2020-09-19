import * as types from "../actions/types";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};
export default function reducer(state = initialState, action) {
  if (action.type === types.ADD_FEATURE) {
    //check if feature is already added
    if (
      state.car.features.filter((f) => f.id === action.payload.id).length === 0
    ) {
      const features = [
        ...state.car.features,
        ...state.additionalFeatures.filter((f) => f.id === action.payload.id),
      ];
      const additionalPrice = features.reduce((acc, cur) => acc + cur.price, 0);
      return {
        ...state,
        additionalPrice,
        car: {
          ...state.car,
          features,
        },
      };
    }
  }
  return state;
}
