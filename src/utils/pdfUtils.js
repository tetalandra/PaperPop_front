import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadPDF = async (elementId, fileName = 'invitation.pdf') => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        await document.fonts.ready; // Ensure all fonts are loaded
        const canvas = await html2canvas(element, {
            scale: 2, // High resolution
            useCORS: true, // Handle images from external sources
            allowTaint: true,
            logging: true,
            backgroundColor: '#000000',
            scrollY: 0, // Prevent scroll offset issues
            scrollX: 0,
            imageTimeout: 0, // Wait for images
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
            onclone: (document) => {
                const el = document.getElementById(elementId);
                if (el) {
                    el.style.transform = 'none'; // Reset any potential transforms
                    el.style.margin = '0'; // Remove margins
                }
            }
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height] // Match canvas dimensions for high quality
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(fileName);
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
};

export const downloadPNG = async (elementId, fileName = 'invitation.png') => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        await document.fonts.ready;
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: true,
            backgroundColor: '#000000',
            scrollY: 0,
            scrollX: 0,
            imageTimeout: 15000, // Wait up to 15s for images
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
            onclone: (document) => {
                const el = document.getElementById(elementId);
                if (el) {
                    el.style.transform = 'none';
                    el.style.margin = '0';
                }
            }
        });

        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
        return true; // Success
    } catch (error) {
        console.error('Error generating PNG:', error);
        throw error;
    }
};
