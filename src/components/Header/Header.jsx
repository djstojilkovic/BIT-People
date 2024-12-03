import "./head.css";
export const Header = ({ setGridToggle, gridToggle }) => {
  return (
    <div className="header-container">
      <div className="header">
        <a className="title" href="/">
          BIT People
        </a>
        <ul className="header-right">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons">refresh</i>
            </a>
          </li>
          <li>
            <a onClick={() => setGridToggle((prevValue) => !prevValue)}>
              {gridToggle ? (
                <i className="material-icons">view_module</i>
              ) : (
                <i className="material-icons">view_list</i>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
