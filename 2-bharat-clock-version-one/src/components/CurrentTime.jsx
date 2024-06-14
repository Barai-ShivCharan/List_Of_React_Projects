let CurrentTime = () => {
  let time = new Date();

  return (
    <p className="lead">
      This is the current Time.{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
