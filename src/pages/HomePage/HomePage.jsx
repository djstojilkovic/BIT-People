import "./home-page.css";
import { useState, useEffect } from "react";
import Person from "../../components/Person/Person";
import Search from "../../components/Search/Search";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const HomePage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gridToggle, setGridToggle] = useState(false);

  const fetchAllPeople = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?results=15`)
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchAllPeople();
  }, []);

  return (
    <>
      <Header setGridToggle={setGridToggle} gridToggle={gridToggle} />
      {loading ? (
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      ) : (
        <>
          <Search />
          <div className={`people ${gridToggle && "grid"}`}>
            {people.map((person) => {
              return <Person person={person} />;
            })}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
