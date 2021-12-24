import PropTypes from "prop-types";

export const Items = ({ data }) => {
  return data.map((item) => (
    <li className="item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
  ));
};

Items.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
