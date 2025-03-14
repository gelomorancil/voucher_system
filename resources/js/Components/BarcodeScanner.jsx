import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const BarcodeScanner = ({ onScan }) => {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const codeReader = new BrowserMultiFormatReader();
        codeReader
            .decodeFromVideoDevice(undefined, videoRef.current, (result, err) => {
                if (result) {
                    onScan(result.text);
                }
                if (err) {
                    setError("No barcode detected");
                }
            })
            .catch(err => setError("Camera access denied"));

        return () => {
            codeReader.reset();
        };
    }, [onScan]);

    return (
        <div>
            <video ref={videoRef} style={{ width: "100%" }} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default BarcodeScanner;
