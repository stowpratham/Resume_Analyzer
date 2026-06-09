import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import ResumeUpload from '../components/ResumeUpload.jsx';
import Loader from '../components/Loader.jsx';
import api from '../services/api.js';


function UploadResume() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleUpload = async () => {
  try {
    if (!selectedFile) {
      setMessage('Please select a resume file before uploading.');
      return;
    }

    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('resume', selectedFile);

    const response = await api.post(
      '/resume/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    const resumeId =
      response.data.data.resumeInfo._id;

    localStorage.setItem('resumeId', resumeId);

    setMessage('Resume uploaded successfully.');

    setTimeout(() => {
      navigate('/analysis');
    }, 1000);

  } catch (error) {
    setMessage(
      error.response?.data?.message ||
      'Upload failed.'
    );
  } finally {
    setUploading(false);
  }
};
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="rounded-3xl bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-brand-600">Resume upload</p>
              <h1 className="text-3xl font-semibold text-slate-900">Upload a resume for instant analysis</h1>
            </div>
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {uploading ? 'Uploading...' : 'Upload resume'}
            </button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <ResumeUpload onFileChange={setSelectedFile} />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-slate-900">File preview</h2>
            <p className="mt-3 text-sm text-slate-500">Review your selected file and upload it when you are ready.</p>
            <div className="mt-6 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-600">File name</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {selectedFile ? selectedFile.name : 'No file selected yet'}
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Supported formats: PDF, DOC, DOCX. Make sure the resume is concise and clean for the best ATS results.
              </p>
            </div>
            {message && <p className="mt-6 rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p>}
            {uploading && <Loader />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UploadResume;
