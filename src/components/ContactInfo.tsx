import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import '../assets/styles/Contact.scss';

function ContactInfo() {
  const handleDownloadPdf = async () => {
    const element = document.querySelector('.cv-card') as HTMLElement;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 1.3,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.85);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('이원호_경력기술서.pdf');
    } catch (error) {
      console.error('PDF 다운로드 중 오류 발생:', error);
    }
  };

  return (
    <div className="contact-info">
      <button className="pdf-download-btn" onClick={handleDownloadPdf} title="PDF로 다운로드" data-html2canvas-ignore="true">
        <PictureAsPdfIcon />PDF로 내려받기
      </button>
      <h1>이원호</h1>
      <p className="profile-title">결제/정산 도메인 QA Engineer</p>
      <div className="contact-list">
        <div><GitHubIcon /> <a href="https://github.com/doki0804" target="_blank" rel="noreferrer">github.com/doki0804</a></div>
        <div>Email: <a href="mailto:doki0804@naver.com">doki0804@naver.com</a></div>
      </div>
    </div>
  );
}

export default ContactInfo;
