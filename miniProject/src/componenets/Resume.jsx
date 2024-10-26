import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
function Resume() {
  return (
    <div style={{ height: '663px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js`}>
      <Viewer fileUrl="/assets/Varad_Badgujar_Resume2_10-8-2024.pdf" />

      </Worker>
    </div>
  );
}

export default Resume;

