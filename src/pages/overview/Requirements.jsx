import React, { useState } from 'react'
import Modal from "../../components/Modal/Modal"
import ModalBody from "../../components/Modal/ModalBody"
import Preview from "../../assets/Preview.png"
import ReqTable from '../../components/reqtable';


function Requirements({ children, header, progress, data }) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} opacity={"bg-opacity-[95%]"}>
                <ModalBody
                                        
                    onClose={() => setModalOpen(false)}
                >
                    <ReqTable data={data} />
                </ModalBody>
            </Modal>

            <button className="w-full flex items-center justify-between bg-white border hover:text-red-500 p-3 rounded-xl hover:shadow transition-all ease-in-out duration-300"
                onClick={() => setModalOpen(true)}
            >
                <p>{header}</p>
                <p>{progress}</p>
                {children}
            </button>
        </>
    )
}

export default Requirements