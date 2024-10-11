import { useState } from "react";
import PropTypes from "prop-types";
import PersonInformationList from "./PersonInformationList";

const personListTypes = [
  {
    title: "Phone Numbers",
    fieldName: "phoneNumbers",
    labelField: "name",
    valueField: "number",
  },
  {
    title: "Adresses",
    fieldName: "addresses",
    labelField: "name",
    valueField: "address",
  },
  {
    title: "Emails",
    fieldName: "emails",
    labelField: "name",
    valueField: "email",
  },
];

const Person = (props) => {
  const [activeListType, setActiveListType] = useState("emails");
  const handleListTypeChange = (newListType) => {
    setActiveListType(newListType);
  };

  return (
    <div className="person">
      <div onClick={props.onRemovePerson} className="person-header">
        <div className="person-remove-x">X</div>
        <img className="person-avatar" src={props.avatar} alt={props.name} />
        <h1 className="person-name">{props.name}</h1>
      </div>
      <div className="info">
        {personListTypes.map((listType) => {
          return (
            <PersonInformationList
              key={listType.fieldName}
              type={listType}
              activeType={activeListType}
              personData={props}
              onListTypeChange={handleListTypeChange}
            />
          );
        })}
      </div>
    </div>
  );
};
Person.propTypes = {
  name: PropTypes.string,
};
Person.defaultProps = {
  name: "Unknow",
};
export default Person;
