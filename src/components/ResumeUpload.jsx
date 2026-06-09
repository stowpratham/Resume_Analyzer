import { useRef, useState } from 'react';

function ResumeUpload({ onFileChange }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('No file selected yet');
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    onFileChange(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  return (
    <div className="space-y-6">
      <label className="block rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center transition hover:border-slate-400">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleChange}
        />
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-600">Drag and drop your resume</p>
          <p className="text-slate-500">Supports PDF and DOCX files. Drop here or click to browse.</p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Choose file
          </button>
        </div>
      </label>
      <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Selected file</p>
            <p className="mt-1 text-sm text-slate-500">{fileName}</p>
          </div>
          <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            Ready to upload
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeUpload;
