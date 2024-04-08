import React, { useEffect, useState } from 'react'


function Modal({ children, isOpen, onClose, opacity }) {

    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);


    return (
        <>
            <div className={`${open ? 'opacity-100' : 'opacity-0 max-h-0 max-w-0 overflow-hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl h-fit max-h-5/6">
                    <div className={`w-full h-full relative overflow-auto cust-scrollbar bg-white backdrop-blur-[7px] ${opacity ? opacity : "bg-opacity-80"} rounded-xl shadow ${open ? 'opacity-100 cale-100 translate-y-0' : 'opacity-0 cale-0 translate-y-96'} transition-all duration-300`}>
                        {children}
                    </div>
                </div>
                {/* Modal Backdrop */}
                <div className={`${open ? '' : 'hidden'} -z-10 inset-0 absolute h-full w-full flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-[1px] `}
                    onClick={onClose} // changes parent to false
                >
                </div>
            </div>
        </>
    )
}

export default Modal