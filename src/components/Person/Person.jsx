import "./person.css";
import { format } from "date-fns";
const Person = ({ person }) => {
  const classNameMen = person.gender === "male" ? "person-male" : "";

  const hiddenEmail = (email) => {
    const [username, domain] = email.split("@");

    if (username.length <= 6) {
      return "***@" + domain;
    }
    const firstThree = username.slice(0, 3);
    const lastThree = username.slice(-3);

    return `${firstThree}...${lastThree}@${domain}`;
  };

  return (
    <div className={"person" + classNameMen}>
      <ul className="person-list">
        <li>
          <div className="img-left">
            <img
              src={person.picture.large}
              alt="person"
              className="circle-img"
            />
          </div>
          <div className="info-right">
            <h3 className="info-wrapper">
              {person.name.first} {person.name.last}
            </h3>
            <p className="info-wrapper">
              <i class="material-icons">email</i>
              {hiddenEmail(person.email)}
            </p>
            <p className="info-wrapper">
              <i class="material-icons">cake</i>
              {format(person.dob.date, "dd. MM. yyyy.")}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Person;
