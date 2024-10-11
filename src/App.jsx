import "./App.css";
import Person from "./components/Person";
import usePhonebook from "./hooks/usePhohebook";
import { initialPhoneBook } from "./data";

function App() {
  const {phoneBook, handleAddPerson, handleRemovePerson} = usePhonebook(initialPhoneBook);
  return (
    <>
      <button
        onClick={() =>
          handleAddPerson({
            name: "Erhan",
            avatar: "https://i.pravatar.cc/150?img=61",
            phoneNumbers: [
              { name: "home", number: "555-1234" },
              { name: "work", number: "555-5678" },
            ],
            addresses: [
              { name: "home", address: "123 Oak St, City, Country" },
              { name: "work", address: "456 Pine Ave, Town, Country" },
            ],
            emails: [
              { name: "personal", email: "alice@email.com" },
              { name: "work", email: "asmith@company.com" },
            ],
          })
        }
      >
        Ekle
      </button>
      {phoneBook.map((person, idx) => {
        return (
          <Person
            onRemovePerson={() => handleRemovePerson(idx)}
            key={person.name}
            avatar={person.avatar}
            name={person.name}
            phoneNumbers={person.phoneNumbers}
            addresses={person.addresses}
            emails={person.emails}
          />
        );
      })}
    </>
  );
}

export default App;
