import { useState } from "react";

const Comp2 = () => {
  for (let i = 1; i < 100000; i++) {
    localStorage.getItem("i");
  }
  return <div>I'm actually nested</div>;
};

const Comp1 = () => {
  for (let i = 1; i < 100000; i++) {
    localStorage.getItem("i");
  }
  return <Comp2 />;
};

const Comp0 = () => {
  for (let i = 1; i < 100000; i++) {
    localStorage.getItem("i");
  }
  return <Comp1 />;
};

const NestedDemo = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div>
        <span>{state}</span>{" "}
        <button onClick={() => setState((c) => c + 1)}>add</button>
      </div>
      <Comp0 />
    </>
  );
};
export default NestedDemo;
