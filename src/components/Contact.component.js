import React from 'react'

function Contact() {
    return (
        <div className=" flex flex-col justify-center items-center my-10">
            <h1 className="text-3xl font-bold">Contact us</h1>
            <div className="flex flex-col justify-center items-center w-full my-4">
                <input type="text" placeholder="Name" className=" my-2 search-input shadow appearance-none border rounded-3xl w-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-3/5 py-2"/>
                <input type="email" placeholder="Email" className="my-2  search-input shadow appearance-none border rounded-3xl w-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-3/5 py-2"/>
                <textarea type="text" placeholder="Message" rows="10" cols="50" className="my-2 search-input shadow appearance-none border rounded-3xl w-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-3/5 py-2">Message</textarea>
                <button className="my-2 bg-white py-2 hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded-3xl shadow">Send</button>
            </div>
        </div>
    )
}

export default Contact