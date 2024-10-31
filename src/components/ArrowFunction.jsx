const ArrowFunction = () => {
  const arr = [1, 3, 5, 7, 10];

  const doubleValue = arr.map((num) => num * 2);

  return (
    <div>
      <h1>Arrow Functions</h1>
      <p>{`${doubleValue[0]} - ${doubleValue[1]} - ${doubleValue[2]} - ${doubleValue[3]} - ${doubleValue[4]}`}</p>
    </div>
  );
};

export default ArrowFunction;
