const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else if (month < 3 && month > 8) {
    return lat < 0 ? "Summer" : "Winter";
  }
};
const SeasonDisplay = (props) => {
  return <div>{getSeason(props.lat, new Date().getMonth())}</div>;
};

export default SeasonDisplay;
