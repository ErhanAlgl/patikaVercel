import { phoneBookReducer } from "../reducers/phoneBookReducer";
import { useReducer } from "react";

const usePhonebook = (initialPhoneBook) => {
  const [phoneBook, dispatchPhoneBook] = useReducer(
    phoneBookReducer,
    initialPhoneBook
  );
  const handleAddPerson = (person) => {
    dispatchPhoneBook({ type: "addPerson", person });
  };
  const handleRemovePerson = (index) => {
    dispatchPhoneBook({ type: "removePerson", index });
  };
  return { phoneBook, handleAddPerson, handleRemovePerson };
};

export default usePhonebook;
