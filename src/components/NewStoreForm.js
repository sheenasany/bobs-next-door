import React, { useState } from "react"

function NewStoreForm({stores, setStores}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [season, setSeason] = useState("")
    const [episode, setEpisode] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newStore = {
            name: name,
            image: image,
            season: season,
            episode: episode,
        }

    setStores([...stores, newStore])
    // this resets each input field state once new store is submitted
    setName("")
    setImage("")
    setSeason("")
    setEpisode("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" id="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
            <input type="number" id="season" placeholder="Season" step="1" value={season} onChange={(e) => setSeason(e.target.value)}/>
            <input type="number" id="episode" placeholder="Episode" step="1" value={episode} onChange={(e) => setEpisode(e.target.value)}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;