import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as Action from './Action';

const Test=()=>{
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const[no, setNo] =  useState(1000);

    console.log({count},'count');
    return(
        <>
            <h1>Test Component</h1>
            Count is : {count}<br />
            
            <input type="button" value='increment' onClick={()=>dispatch({type: Action.Inc})} />

            <input type="button" value='Decrement' onClick={()=>dispatch({type: Action.Dec})} />

            <input type="button" value={'inc by'+ no} onClick={()=>dispatch({type: Action.Inc_By_Val, payload: no})} />

            <input type="button" value={'Dec by 30'} onClick={()=>dispatch({type: Action.Dec_By_Val, payload: 30})} />

            <input type="button" value='reset' onClick={()=>dispatch({type: Action.Reset})} />
        </>
    );
}
export default Test;