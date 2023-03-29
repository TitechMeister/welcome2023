import { Typography } from '@mui/material';
import * as React from 'react';
import { Document, Page, pdfjs, } from 'react-pdf';
import doc from './interview.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Interview() {
    const [numPages, setNumPages] = React.useState(0);
    return (
        <div>
            <Document file={doc} onLoadSuccess={(info) => { setNumPages(info.numPages) }} options={{}}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} width={window.innerWidth*0.8}/>
                ))}
            </Document>
        </div>
    );
}

export default Interview;