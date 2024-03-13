import React, { useState } from 'react'

function ErrorMessage({ errorMessage, errorState, background, color, border, fill }) {

    return (
        <>
            {
                errorState &&
                <div
                    className={`flex flex-row justify-center m-auto px-2 py-0.5 ${border
                        ? `border border-y-0 border-r-0 border-l-4 border-${color || 'red'}-600`
                        : ''
                        } ${background
                            ? `bg-${color || 'red'}-100`
                            : ''
                        } rounded-l-sm rounded-lg`}
                >
                    {
                        fill ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${color ? `text-${color}-600` : ``}`}>
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${color ? `text-${color}-600` : ``}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                    }
                    <p className={`text-sm pl-2 ${color ? `text-${color}-600` : ``}`}>{errorMessage}</p>
                </div>
            }
        </>
    )
}

export default ErrorMessage