import React from 'react';

const ResourceCard=({resource })=>{
    return (
        <div className="resourceCard">
            <p><strong>Name:</strong> {resource.name}</p>
            <p>Location: {resource.address}</p>
        </div>
    );
};

export default ResourceCard;