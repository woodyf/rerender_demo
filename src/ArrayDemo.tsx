import { ChangeEvent, useState } from "react";
import produce from "immer";

const Item = (props: {
  id: number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { id, name, onChange } = props;
  // mimic a heavy render
  for (let i = 1; i < 50000; i++) {
    localStorage.getItem("i");
  }
  return (
    <div>
      <span>id: {id}</span> <input value={name} onChange={onChange} />
    </div>
  );
};

const initData = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const ArrayDemo = () => {
  const [state, setState] = useState(initData);
  return (
    <>
      {state.map((i) => (
        <Item
          key={i.id}
          {...i}
          onChange={(e) =>
            setState((s) =>
              produce(s, (draft) => {
                const target = draft.find((item) => item.id === i.id);
                if (target) {
                  target.name = e.target.value;
                }
              })
            )
          }
        />
      ))}
    </>
  );
};
export default ArrayDemo;
