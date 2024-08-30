import React from "react";

interface DataDisplayProps {
    data:string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
    return <div>Data :{data}</div>;
};

export default DataDisplay;