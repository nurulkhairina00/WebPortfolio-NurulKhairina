/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

const PortfolioModal = (props) => {
  const { showModal, data, setShowModal } = props;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-colors z-50 ${
            showModal ? "visible bg-black/50" : "visible"
          } p-4 `}
        >
          <div
            className={`bg-light rounded-xl shadow transition-all ${
              showModal ? "scale-100 opacity-100" : "scale-125 opacity-0"
            } w-full md:w-2/3 lg:w-2/5 dark:bg-slate-800 dark:text-light`}
          >
            <div className="bg-primary p-4 rounded-tl-xl rounded-tr-xl">
              <AiOutlineClose
                className="absolute right-3 top-3 text-light"
                onClick={handleCloseModal}
                size={25}
              />
              <h2 className="text-lg font-bold text-light">
                Description {data.judul}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-justify">{data.desc}</p>
            </div>
            <div className="bg-primary p-[0.5px] rounded-full"></div>
            <center className="p-4">
              <button
                className="text-base font-semibold text-secondary border-2 border-secondary py-1 px-5 rounded-full hover:bg-primary hover:text-light hover:border-primary hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out dark:bg-gray dark:hover:text-primary"
                onClick={handleCloseModal}
              >
                close
              </button>
            </center>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioModal;
