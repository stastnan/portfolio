import { useCallback, useRef, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { useResizeObserver } from "@wojtekmaj/react-hooks";

import { PdfModal } from "./styled";

type PDFFile = string | File | null;

interface Props {
  file: PDFFile;
  handleClosePdfPreview: () => void;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const maxWidth = 540;

function PdfPreview({ file, handleClosePdfPreview }: Props) {
  const [containerWidth, setContainerWidth] = useState<number>(
    window.innerWidth,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef.current, {}, onResize);

  return (
    <PdfModal ref={containerRef} onClick={handleClosePdfPreview}>
      <Document file={file}>
        <Page
          pageNumber={1}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
          onClick={(e) => e.stopPropagation()}
        />
      </Document>
    </PdfModal>
  );
}

export default PdfPreview;
