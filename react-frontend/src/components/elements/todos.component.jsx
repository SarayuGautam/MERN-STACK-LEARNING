import React from "react";

import { Link } from "react-router-dom";

export default function Todo({
  todo: { _id, description, responsible, priority },
}) {
  return (
    <tr>
      <td>{description}</td>
      <td>{responsible}</td>
      <td>{priority}</td>
      <td>
        <Link to={"/edit/" + { _id }}>Edit</Link>
      </td>
    </tr>
  );
}
