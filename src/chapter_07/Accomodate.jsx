import React, { useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Acoommdate(prps) {
    const [isFull, setIsFull] = useState(false);
    const [count, increasCount, decresaseCount] = useCounter(0);

    useEffect(() => [
        console.log("===================");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);

    ]);

    useEffect(() => [
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    ], [count]);

    return (
        <div style=
    )