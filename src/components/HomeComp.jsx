import React,{useState} from "react";
import BookForm from "./BookForm";
function HomeComp() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return ( 
         <div className="relative h-screen overflow-hidden bg-indigo-900">
        <img src="https://pbs.twimg.com/media/EL84j20XkAEhyf-?format=jpg&name=4096x4096" className="absolute object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-25">
        </div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container px-6 py-4 mx-auto md:px-12">
            <div className="items-center justify-center md:flex">
              <div className="flex items-center justify-between">
                <div className="md:hidden">
                
                </div>
              </div>
              <div className="items-center hidden md:flex">
              </div>
            </div>
          </nav>
        </header>
        <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-2 border-gray-900  backdrop-blur rounded-lg md:my-32">
          <div className="relative z-10 flex flex-col items-center justify-between w-full">
            <p className="flex flex-col items-center text-6xl font-extrabold text-center text-gray-100 md:text-8xl uppercase">
              Bookers
            </p>
            <p className="flex flex-col items-center max-w-lg mt-6 text-lg  text-center text-gray-200 font-normal">
              Book a book 📕
            </p>
            <div className="pt-10">
            <button 
            onClick={handleOpenModal}
        className="font-bold bg-gray-800 border-2 text-white py-4 px-10 rounded border-gray-900 hover:border-1 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-10">
              Book now!
            </button>
            
            </div>
           
          </div>
        </div>
        <BookForm isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
     );
}

export default HomeComp;