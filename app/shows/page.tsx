import React from 'react'

const Shows = () => {
    const shows = ["Seinfeld", "The Office", "Rebelde", "La Reina Del Sur"]
    
    return (
        <>
            <h1>TV Shows</h1>
            <ul>
                {shows.map(show => <li key="a"><a href="/episodes">{show}</a></li>)}
            </ul>
        </>
      )
}

export default Shows