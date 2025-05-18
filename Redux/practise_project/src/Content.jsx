import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from "./app/features/counter/counterSlice";
function Content() {
    const count_ = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
    return (
        <>
            <p>Count : {count_}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button>&nbsp;&nbsp; <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}


export { Content };