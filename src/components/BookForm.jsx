import React,{ useState } from "react";
import {
  addDoc,
  collection
} from 'firebase/firestore';
import { database } from "../../firebaseConfig";

function BookForm({ isOpen, onClose }) {
    const [bookName, setBookName] = useState("");
    const [borrowersName, setBorrowersName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const databaseRef = collection(database, 'Borrower');
    const handleSubmit = (event) => {
        event.preventDefault();
        addData();
        console.log({ bookName, borrowersName, emailAddress, contactNumber }, " added");
        alert("Data added to firestore");
        onClose();
        setBookName("");
        setBorrowersName("");
        setEmailAddress("");
        setContactNumber("");
      };

      const addData = () => {
        addDoc(databaseRef, {
          bookName: bookName,
          borrowersName: borrowersName,
          emailAddress: emailAddress,
          contactNumber: contactNumber
        })
    }
    
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
          <div className="bg-white rounded-lg overflow-hidden max-w-md mx-auto z-10">
            <div className="p-4 flex justify-between items-center bg-gray-100">
              <h2 className="text-lg font-medium">Book Booking Form</h2>
              <button onClick={onClose}>
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Book Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter book name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="borrowersName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Borrower's Name
                  </label>
                  <input
                    id="borrowersName"
                    type="text"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter borrower's name"
                    value={borrowersName}
                    onChange={(e) => setBorrowersName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="contactNumber"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Contact Number (Philippine format)
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    pattern="[0-9]{11}"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter contact number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookForm;