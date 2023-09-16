const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "1000",
  backgroundColor: "#FFF",
  padding: "40px 50px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: "1000",
};

export default function SignInModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        {children}
        <br />
        <br />
        <button
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
}
