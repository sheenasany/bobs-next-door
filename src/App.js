import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React, { useState, useEffect } from "react";

function App() {
  const [stores, setStores] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(res => res.json())
    .then(stores => setStores(stores))
  }, [])

  // console.log(stores)
// render logic for your filter to pick and choose what you want your new array to hold
// use .toLowerCase() to down case the search so that it's non-case sensitive
// in this case, don't use strict operator because it would have to match exactly
// use .includes instead 
// does the name in lower case include the search term in lower case, if so, return that new array
// then pass down as prop to storeList is render those stores
  let filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="holder"/>
      <h1>Neighbor Stores</h1>
      <Search setSearchTerm={setSearchTerm} />
      <NewStoreForm stores={stores} setStores={setStores}/>
      <StoreList stores={filteredStores} />
      
    </div>
  );
}
