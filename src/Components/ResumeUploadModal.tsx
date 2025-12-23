import React from "react";
import ResumeUploadPage from "./ResumeUploadPage";
import "./Components CSS/ResumeUploadModal.css";

interface ResumeUploadModalProps {
  open: boolean;
  onClose: () => void;
}

const ResumeUploadModal: React.FC<ResumeUploadModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <ResumeUploadPage />
      </div>
    </div>
  );
};

export default ResumeUploadModal; // ✅ THIS LINE FIXES IT
