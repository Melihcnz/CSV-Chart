import React from 'react';

const InfoBox = ({ label, value }) => (
    <div className="info-box">
        <strong>{label}:</strong> {value}
    </div>
);

export default InfoBox;