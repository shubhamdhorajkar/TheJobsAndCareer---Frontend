import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Components CSS/ResumeUpload.css";

const SERVICE_ID = "service_qxqtd8q";
const TEMPLATE_ID = "template_mtrzp4d"; // 👈 create new template
const PUBLIC_KEY = "n-hNuXQVDVyvQs8KG";

const ResumeUploadPage: React.FC = () => {
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result?.toString().split(",")[1];
      setFileBase64(base64 || null);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fileBase64) {
      alert("Please upload your resume");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      job_title: formData.get("job_title"),
      experience: formData.get("experience"),
      current_salary: formData.get("current_salary"),
      expected_salary: formData.get("expected_salary"),
      location: formData.get("location"),
      notice_period: formData.get("notice_period"),
    };

    try {
      setLoading(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
      alert("✅ Resume submitted successfully!");
      form.reset();
      setFileBase64(null);
      setFileName("");
    } catch (err) {
      console.error("Resume Upload Error:", err);
      alert("❌ Failed to submit resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-page">
      <h2>Upload Your Resume</h2>

      <form className="resume-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Contact Number" required />
        <input name="job_title" placeholder="Job Title / Role" />
        <input name="experience" placeholder="Years of Experience" />
        <input name="current_salary" placeholder="Current Salary" />
        <input name="expected_salary" placeholder="Expected Salary" />
        <input name="location" placeholder="Preferred Location" />

        <select name="notice_period" required>
          <option value="">Notice Period</option>
          <option value="Immediate">Immediate</option>
          <option value="15 Days">15 Days</option>
          <option value="30 Days">30 Days</option>
          <option value="60 Days">60 Days</option>
        </select>

        <label className="file-upload">
          Upload Resume (PDF/DOC/DOCX)
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        </label>

        {fileName && <p className="file-name">📄 {fileName}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Launch My Career Journey 🚀"}
        </button>
      </form>
    </div>
  );
};

export default ResumeUploadPage;
