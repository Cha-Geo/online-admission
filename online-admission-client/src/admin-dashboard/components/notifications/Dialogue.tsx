import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css;
import { CloseButton, SaveButton } from "../Buttons";

const ConfirmDialogue: React.FC<ConfirmDialogueProps> = ({ title, onSave }) => {
  const openConfirmationDialog = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="custom-ui bg-blueGray-600 rounded-md p-20 text-white text-center">
          <h1
            className="text-xl font-bold text-uppercase pb-4 px-4"
            style={{ paddingTop: "2rem" }}
          >
            {title}
          </h1>
          <div className="mt-6 mb-4 px-4 py-4 mx-4">
            <CloseButton
              onClick={onClose}
              style={{
                marginRight: "20px",
                padding: "0.5rem",
                fontSize: "1.5rem",
              }}
            />
            <SaveButton
              style={{
                marginLeft: "20px",
                padding: "0.5rem",
                fontSize: "1.5rem",
              }}
              onClick={() => {
                onClose();
                onSave();
              }}
            />
          </div>
        </div>
      ),
    });
  };

  return (
    <button onClick={openConfirmationDialog}>Open Confirmation Dialog</button>
  );
};

export default ConfirmDialogue;
