import { Link } from "react-router-dom";

export const movieArray = (item, key) => (
  <div key={key}>
    <Link to={`/${item.id}`}>
      {item.id}, {item.name}
    </Link>
  </div>
);
