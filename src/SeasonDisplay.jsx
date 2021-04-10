const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else if (month < 3 && month > 8) {
    return lat < 0 ? "Summer" : "Winter";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "Winter" ? "Burrr, it's chilly!" : "Let's hit the beach!";
  const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
