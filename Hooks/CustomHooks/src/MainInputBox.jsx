import React from "react";
export default function InputBox() {
    return (
        <>
            <div className=''>
                <h1 className='text-gray-500 font-semibold text-5xl mt-36 mb-12'>Currency Convertor</h1>
                <div className='w-full h-full rounded-2xl bg-gray-500 p-10  text-1xl font-thin shadow opacity-80 border-2'>
                    <div className="w-full h-full bg-white rounded-xl m-1 p-2 flex justify-between items-center">
                        <div className="w-1/2">
                            <label className="text-black mb-2 inline-block">
                                From
                            </label>
                            <input
                                className="outline-none w-full bg-transparent py-1.5 text-slate-900"
                                type="number"
                                placeholder="Type Amount Here"
                            />
                        </div>
                        <div className="w-auto flex items-center text-right">
                            <select
                                className="rounded-lg px-1 py-1 bg-slate-800 cursor-pointer outline-none ml-2"
                            >
                                <option value="usd">
                                    usd
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-full bg-white rounded-xl m-1 p-2 flex justify-between items-center">
                        <div className="w-1/2">
                            <label className="text-black mb-2 inline-block">
                                To
                            </label>
                            <input
                                className="outline-none w-full bg-transparent py-1.5 text-slate-900"
                                type="number"
                                placeholder="Converted Amount Here"
                            />
                        </div>
                        <div className="w-auto flex items-center text-right">
                            <select
                                className="rounded-lg px-1 py-1 bg-slate-800 cursor-pointer outline-none ml-2"
                            >
                                <option value="usd">
                                    usd
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
