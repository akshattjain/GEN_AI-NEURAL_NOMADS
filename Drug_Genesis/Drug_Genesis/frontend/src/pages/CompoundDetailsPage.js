import React from 'react';
import { useParams } from 'react-router-dom';

const CompoundDetailsPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Compound Details for ID: {id}</h2>
            {/* Add more details about the compound */}
        </div>
    );
};

export default CompoundDetailsPage;
