import React from 'react';

const ResourceCard=({resource })=>{
    return (
        <div className="resourceCard">
            <h3>{resource.name}</h3>
            <p>{resource.desrciption}</p>
            <p>Location: {resource.address}</p>
        </div>
    );
};

export default ResourceCard;