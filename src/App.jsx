import { useState } from 'react'
import './App.css'
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";

const App = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleSearch = async (location,resourceType) => {
    const resourceMap = {
      shelter: 'shelter', pantry:'food pantry',library: 'library'
    };

    const userQuery = `${resourceMap[resourceType]} in ${location}`;
    const osmURl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(userQuery)}&format=json&limit=10`;

    setLoading(true); 
    setError(null);

    try {
      const results = await fetch(osmURl);
      const data = await results.json();

      const resourcesFromOSM= data.map((place,index) => ({
        id:index,
        name:place.display_name.split(',')[0],
        address:place.display_name,
        description: resourceType,
      }));

      setResources(resourcesFromOSM);
    }catch (error){
      console.error('Error getting data from OSM API',error);

    }


  };

  return (
    <div className="app">
    <h1> Community Resource Finder</h1>
    <ResourceForm onSearch={handleSearch} />
    <ResourceList resources ={resources} />    
    <button onClick={() => setResources([])}>Clear Results</button>
    </div>
  );
};

export default App;
