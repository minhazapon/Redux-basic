import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/CounterSlice";


const Counter = () => {

  const dispatch = useDispatch();


  const handleIncremnt = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }


  return (
    <div className=" mt-14 mb-14 ml-14 mr-14 ">

      <div>
        <p className=" text-center text-3xl ">Counter Of Redux</p>
        <div className=" flex justify-center ">
          <div className=" flex justify-center items-center gap-5 mt-10 border-[1px] border-cyan-700 p-5 rounded-xl ">
            <button onClick={handleIncremnt} className=" btn ">Increment</button>
            <button>0</button>
            <button onClick={handleDecrement} className=" btn ">Decrement</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Counter;