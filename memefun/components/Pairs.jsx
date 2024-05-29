import React from "react";

const Pairs = () => {
    return (
        <div className="flex justify-between items-center">
            <p>Real Time Pairs</p>
            <div className="flex justify-between gap-3 w-[88%]">
                <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em] p-1">
                    <option value="">Recent Apes</option>
                </select>
                <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em]">
                    <option value="">Descending</option>
                </select>
                <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em]">
                    <option value=""></option>
                </select>
                <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em]">
                    <option value="">All</option>
                </select>
                <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em]">
                    <option value="">All Networks</option>
                </select>
            </div>
        </div>
    )
}

export default Pairs