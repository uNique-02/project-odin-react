import React from "react";
import { jsPDF } from "jspdf";

function CVPreview({ cvData }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Store text in variables
    const title = "Curriculum Vitae";
    const nameText = `Name: ${cvData.name}`;
    const emailText = `Email: ${cvData.email}`;
    const phoneText = `Phone: ${cvData.phone}`;
    const addressText = `Address: ${cvData.address}`;
    const educationText = `Education: ${cvData.education}`;
    const experienceText = `Experience:\n\n${cvData.experience}`;
    const skillsText = `Skills: \n\n ${cvData.skills}`;

    // Set font and size
    doc.setFont("Arial", "normal");
    doc.setFontSize(12);

    // Define the width of the page and margin
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10; // 10mm margin
    const contentWidth = pageWidth - margin * 2;

    // Wrap the text content
    const titleLines = doc.splitTextToSize(title, contentWidth);
    const nameLines = doc.splitTextToSize(nameText, contentWidth);
    const emailLines = doc.splitTextToSize(emailText, contentWidth);
    const phoneLines = doc.splitTextToSize(phoneText, contentWidth);
    const addressLines = doc.splitTextToSize(addressText, contentWidth);
    const educationLines = doc.splitTextToSize(educationText, contentWidth);
    const experienceLines = doc.splitTextToSize(experienceText, contentWidth);
    const skillsLines = doc.splitTextToSize(skillsText, contentWidth);

    // Add the wrapped text to the PDF
    let currentY = 10; // Start position on the Y-axis

    doc.text(titleLines, margin, currentY);
    currentY += doc.getTextDimensions(titleLines).h + 5;

    doc.text(nameLines, margin, currentY);
    currentY += doc.getTextDimensions(nameLines).h + 5;

    doc.text(emailLines, margin, currentY);
    currentY += doc.getTextDimensions(emailLines).h + 5;

    doc.text(phoneLines, margin, currentY);
    currentY += doc.getTextDimensions(phoneLines).h + 5;

    doc.text(addressLines, margin, currentY);
    currentY += doc.getTextDimensions(addressLines).h + 5;

    doc.text(educationLines, margin, currentY);
    currentY += doc.getTextDimensions(educationLines).h + 5;

    doc.text(experienceLines, margin, currentY);
    currentY += doc.getTextDimensions(experienceLines).h + 5;

    doc.text(skillsLines, margin, currentY);

    // Save the PDF
    doc.save("CV.pdf");
  };

  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>
      <p><strong>Name:</strong> {cvData.name}</p>
      <p><strong>Email:</strong> {cvData.email}</p>
      <p><strong>Phone:</strong> {cvData.phone}</p>
      <p><strong>Address:</strong> {cvData.address}</p>
      <p><strong>Education:</strong> {cvData.education}</p>
      <p><strong>Experience:</strong> <br></br> {cvData.experience}</p>
      <p><strong>Skills:</strong> {cvData.skills}</p>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default CVPreview;
