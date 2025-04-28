import React from "react";
import QRCode from "react-qr-code";

const QrCode = ({ value }: { value: string }) => {
  return (
    <div>
      <QRCode
        size={64}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrCode;
