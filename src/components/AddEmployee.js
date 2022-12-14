import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';


const AddEmployee = (props) => {
    const[name, setName] = useState("");
    const[role, setRole] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <button onClick={handleShow} className="mx-auto block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                + Add Employee
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form 
                        onSubmit={(e) => {
                        handleClose();
                        e.preventDefault();
                        props.updateEmployee(props.id, name, role);
                        }}
                        id="editEmployee" 
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Employee ID
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="id" 
                                placeholder="1"
                                type="text" 
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="name" 
                                placeholder="Minh"
                                type="text" 
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Role
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="role" 
                                placeholder="Intern SWE"
                                type="text" 
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Image URL
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="imgURL" 
                                placeholder="https:google.com"
                                type="text" 
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={handleClose}
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                    <button
                        form="editEmployee"
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;