import React from "react";

const Option = ({ colorClass, colorName, description, inputField }) => (
  <tr>
    <td className={colorClass}>{colorName}</td>
    <td>{description}</td>
    <td>{inputField}</td>
  </tr>
);

export default Option;
