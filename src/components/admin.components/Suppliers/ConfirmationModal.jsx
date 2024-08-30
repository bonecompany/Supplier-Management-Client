import React from "react";

const ConfirmationModal = ({ onConfirm, onCancel, message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Confirm Save</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
