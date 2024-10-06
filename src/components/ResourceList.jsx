import React from 'react';
import ResourceCard from './ResourceCard';

const ResourceList=({resources}) => {
    return (
        <div className='resourceList'>
            {resources.length >0? (
                resources.map((resource) => (
                <ResourceCard key ={resource.id} resource={resource}/>
            ))
        ):(
            <p> No resources were found. Try a different search. </p>
        ) }

        </div>
    );
};

export default ResourceList;

