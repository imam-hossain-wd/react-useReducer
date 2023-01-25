import { useReducer } from "react";
const Form = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload.data;
    } else if (action.type === "DRECREMENT") {
      return state - action.payload.data;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-green-300 w-72 h-60 border-2 border-red-200 rounded">
      <div className="mt-10">
        <div className="text-center mt-10 text-lg font-bold">{state}</div>
      </div>
      <div className="flex justify-around mt-20">
        <button
          
          onClick={() => dispatch({ type: "DRECREMENT", payload: { data: 5 } })}
          className="btn btn-primary"
        >
          DRECEMENT
        </button>
        <button
          
          onClick={() => dispatch({ type: "INCREMENT", payload: { data: 5 } })}
          className="btn btn-primary"
        >
          INCREMENT
        </button>{" "}
      </div>
    </div>
  );
};

export default Form;
