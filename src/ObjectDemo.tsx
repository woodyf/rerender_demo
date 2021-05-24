import produce from "immer";
import { useState } from "react";

const OtherComp = (props: { someOtherData: { text: string } }) => {
  const { someOtherData } = props;
  // mimic a heavy render
  for (let i = 1; i < 100000; i++) {
    localStorage.getItem("i");
  }
  return <p>{someOtherData.text}</p>;
};

const initData = {
  input: "",
  someOtherData: { text: "data remains unchanged when input change " },
};

const ObjectDemo = () => {
  const [state, setState] = useState(initData);
  return (
    <>
      <div>
        <input
          value={state.input}
          onChange={(e) =>
            setState((s) =>
              produce(s, (draft) => {
                draft.input = e.target.value;
              })
            )
          }
        />
      </div>
      <OtherComp someOtherData={state.someOtherData} />
    </>
  );
};
export default ObjectDemo;
