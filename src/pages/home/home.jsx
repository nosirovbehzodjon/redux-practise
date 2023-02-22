import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/actions";
const Home = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    console.log(count);
    return (
        <>
            <p>home</p>
            <p>count: {count}</p>
            <button onClick={() => dispatch(increment(1))}>increment</button>
            <button onClick={() => dispatch(decrement(1))}>decrement</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    );
};

export default Home;
