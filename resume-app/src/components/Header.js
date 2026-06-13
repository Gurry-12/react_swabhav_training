function Header({ info }) {
  return (
    <header>
      <div className="header-row">
        <div>
          <h1>{info.name}</h1>
          <p>{info.title}</p>
        </div>

        <div className="contact">
          <p>{info.phone}</p>
          <p>{info.email}</p>
          <p>{info.location}</p>
        </div>
      </div>

      <div>
        <a href={info.github}>GitHub</a> |<a href={info.linkedin}> LinkedIn</a>
      </div>
    </header>
  );
}

export default Header;
