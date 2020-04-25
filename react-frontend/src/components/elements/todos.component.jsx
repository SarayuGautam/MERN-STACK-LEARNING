import React from "react";

import { Link } from "react-router-dom";

export default function Todo({
  todo: { _id, description, responsible, priority, completed },
}) {
  return (
    <tr>
      <td className={completed ? "completed" : ""}>{description}</td>
      <td className={completed ? "completed" : ""}>{responsible}</td>
      <td className={completed ? "completed" : ""}>{priority}</td>
      <td>
        <Link to={"/edit/" + _id}>Edit</Link>
      </td>
      <td>
        <Link style={{ color: "red " }} to={"/delete/" + _id}>
          Delete
        </Link>
      </td>
    </tr>
  );
}
