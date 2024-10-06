import {useState} from "react"


const ResourceForm=({onSearch}) => {
    const [location,setLocation]=useState('');
    const [resourceType,setResourceType]=useState('');

    const handleSubmit =(e) => {
        e.preventDefault(); //prevents it from refreshing the page
        console.log('Location:', location, 'Resource Type:', resourceType);
        onSearch(location,resourceType); //calls function onSearch
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) =>setLocation(e.target.value)}
            />
            <select value={resourceType} onChange={(e) => setResourceType(e.target.value)} required>
                <option value="">Select a resource</option>
                <option value="shelter">Shelter</option>
                <option value="pantry">Food Pantry</option>
                <option value="library">Library</option>
            </select>

            <button type="submit">Search</button>

        </form>
    );
    
};

export default ResourceForm;