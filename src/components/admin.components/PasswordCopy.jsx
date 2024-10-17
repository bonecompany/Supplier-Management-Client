import React from 'react'

function PasswordCopy({text,close}) {
    const copyPassword = () => {
        navigator.clipboard.writeText(text)
        close()
       }
    return (
        <div>
            <div
                className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${text ? "visible bg-black/80" : "invisible"
                    }`}
            >

                <div
                    className={`bg-gray-200 w-fit h-fit overflow-y-auto rounded-xl shadow p-8  duration-500 ${text ? "scale-110 opacity-100" : "scale-125 opacity-0"
                        } `}
                >
                    <p className="text-lg mb-2"> password : {text}</p>
                    <button
                        onClick={copyPassword}
                        className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition"
                    >
                        copy password
                    </button>
                </div>

            </div></div>
    )
}

export default PasswordCopy