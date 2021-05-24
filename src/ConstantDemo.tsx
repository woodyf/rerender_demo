import { CSSProperties, useState } from "react";

const StaticDataDemo = (props: { style: CSSProperties }) => {
  const { style } = props;
  for (let i = 1; i < 100000; i++) {
    localStorage.getItem("i");
  }
  return <div style={style}></div>;
};

const ConstantDemo = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div>
        <span>{state}</span>{" "}
        <button onClick={() => setState((c) => c + 1)}>add</button>
      </div>
      <StaticDataDemo
        style={{ width: "100px", height: "100px", backgroundColor: "yellow" }}
      />
    </>
  );
};
export default ConstantDemo;
