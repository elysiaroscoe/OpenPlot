import React from 'react'
import { useHistory } from 'react-router-dom';
import './info.css'

const Info = () => {

    const history = useHistory();

    const clearData = () => {
        localStorage.clear()
        console.log("Villagers cleared");
        history.push('/')
    }

    const toDisplay = () => {
        history.push('/')
    }

    return (
        <div className='outerDiv'>
            <div className='backgroundImage'></div>
            <div className='container infoPage'>
                <div className='infoBox'>
                    <div>
                        <h2>OpenPlot</h2>
                        <button className='navButton' onClick={toDisplay}>Home Page</button>
                        <p>This site was developed as a browser homepage for ACNH players</p>
                        <p>to remind you to time travel back so that your plot stays open</p>
                        <p>and give you a place to display and manifest your dreamies</p>
                    </div>
                    <div>
                        <h2>How To Use</h2>
                        <p>Type your desired villager name!</p>
                        <p>Submit the form and their photo will appear</p>
                        <p>An alert will appear if the villager is not found</p>
                        <p>To remove a villager, click on the button with their name</p>
                        <p>If you would like to start over, you can click the button below:</p>
                    </div>
                    <button className="clearButton" onClick={() => clearData()}>Start Over</button>
                    <div>
                        <h2>Setting Homepage</h2>
                        <p>Consider setting OpenPlot as the home page or startup page in your browser</p>
                        <p>Viewing the page will remind you to change your time in-game</p>
                        <p>Navigate to Browers Settings, Appearance, Show Home, and there you can set OpenPlot! </p>
                        <p>Wishing you a quick and easy dreamy hunt &#10084; </p>
                        <p><a href="https://api.nookipedia.com/">Nookipedia API</a> <a href="https://github.com/elysiaroscoe/OpenPlot">GitHub Repository</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;