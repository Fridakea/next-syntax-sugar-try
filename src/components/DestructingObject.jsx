const DestructingObject = () => {
  const arr = [1, 2, 3, 4, 5];
  const [first, secound] = arr;

  return (
    <div>
      <h1>Destructing Obejcts</h1>
      <p>{[first, secound]}</p>
    </div>
  );
};

export default DestructingObject;
