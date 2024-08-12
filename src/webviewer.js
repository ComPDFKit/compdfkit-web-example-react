import { useEffect, useRef } from "react";
import ComPDFKitViewer from '@compdfkit_pdf_sdk/webviewer';

export default function WebViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    let docViewer = null;

    ComPDFKitViewer.init({
      path: '/',
      pdfUrl: './example/developer_guide_web.pdf',
      license: '<Input your license here>'
    }, containerRef.current).then((core) => {
      docViewer = core.docViewer

      docViewer.addEvent('documentloaded',async () => {
        console.log('document loaded')
      })
    })
  }, []);

  return <div ref={containerRef} style={{width: '100%', height: '100vh', overflow: 'hidden'}} />
}