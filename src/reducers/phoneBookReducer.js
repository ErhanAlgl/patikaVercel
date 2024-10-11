export const phoneBookReducer = (state, action) => {
  switch (action.type) {
    case "addPerson":
      return [ action.person, ...state];
    case "removePerson":
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
  }
};
