import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import "./downloadpage.css"

const DownloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("landscape", "pt", "a2")
            pdf.addImage(imgData, "JPEG", 0, 0)
            pdf.save(`${downloadFileName}`)
        })
    }
    return (
        <div className='downloadpage'>
            <button onClick={downloadFileDocument}>Download Page</button>
        </div>
    )
}

export default DownloadPage;