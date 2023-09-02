import React from "react"

function Search({setSearchTerm }) {

    // setSearch state in App, then filter by search term
const onSearch = (e) => {
    setSearchTerm(e.target.value)
}

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={(e) => onSearch(e)} />
        </div>
    );
}

export default Search;