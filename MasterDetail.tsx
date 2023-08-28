import React, { useState } from 'react';

interface InstrumentType {
  name: string;
  details: string[];
}

interface MasterDetailProps {
  instrumentTypes: InstrumentType[];
}

const MasterDetail: React.FC<MasterDetailProps> = ({ instrumentTypes }) => {
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

  const handleMasterClick = (details: string[]) => {
    setSelectedDetails(details);
  };

  return (
    <div className="master-detail-container">
      <div className="master">
        {instrumentTypes.map(instrumentType => (
          <div
            key={instrumentType.name}
            className="master-item"
            onClick={() => handleMasterClick(instrumentType.details)}
          >
            {instrumentType.name}
          </div>
        ))}
      </div>
      <div className="detail">
        {selectedDetails.map((detail, index) => (
          <div key={index} className="detail-item">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterDetail;
