import "./search.css";

const Search = () => {
  return (
    <div className="container">
      <div className="input-field">
        <i class="material-icons prefix">search</i>
        <input
          id="search"
          type="search"
          class="validate"
          placeholder="Search Users"
        />
      </div>
    </div>
  );
};

export default Search;
