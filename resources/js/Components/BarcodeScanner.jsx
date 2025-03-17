import React, { useEffect, useRef, useState } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onScan }) => {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError("Camera access is not supported in this browser.");
            return;
        }

        Quagga.init(
            {
                inputStream: {
                    type: "LiveStream",
                    target: videoRef.current,
                    constraints: {
                        facingMode: "environment", // Use back camera
                    },
                },
                decoder: {
                    readers: ["code_128_reader", "ean_reader", "ean_8_reader"],
                },
            },
            (err) => {
                if (err) {
                    console.error(err);
                    setError("Failed to start camera: " + err.message);
                    return;
                }
                Quagga.start();
            }
        );

        Quagga.onDetected((data) => {
            onScan(data.codeResult.code);
            setError(null);
        });

        return () => {
            Quagga.stop();
        };
    }, [onScan]);

    return (
        <div>
            <div ref={videoRef} className="bg-yellow-200 w-full h-[300px] max-w-[400px] mx-auto" />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default BarcodeScanner;
