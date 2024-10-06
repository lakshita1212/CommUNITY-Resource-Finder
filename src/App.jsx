import { useState } from 'react'
import './App.css'
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";

const App = () => {
  const [resources, setResources] = useState([]);

  const handleSearch =(location,resourceType) => {
    const mockResources = [
      { id: 1, name: 'Local Shelter', description: 'A safe place to stay', address: '123 Main St',type:'shelter' },
      { id: 2, name: 'Food Pantry', description: 'Provides food assistance', address: '456 Elm St' ,type:'pantry'},
      { id: 3, name: 'Public Library', description: 'Access to books and internet', address: '789 Oak St',type:'library' },
    ];

    const filteredResources= mockResources.filter(resource => 
      resource.type === resourceType
    );

    setResources(filteredResources);
  };

  return (
    <div className="app">
    <h1> Community Resource Finder</h1>
    <ResourceForm onSearch={handleSearch} />
    <ResourceList resources ={resources} />    
    
    </div>
  );
};

export default App;
