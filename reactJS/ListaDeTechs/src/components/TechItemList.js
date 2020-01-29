import React from "react";
import PropTypes from "prop-types";
function TechItemList({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remove
      </button>
    </li>
  );
}
TechItemList.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default TechItemList;
