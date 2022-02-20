import React, {useState, useEffect} from 'react';
import './display.css'
import Form from './Form';

const Display = () => {
    
    const [dreamies, setDreamies] = useState(
        JSON.parse(localStorage.getItem('storedDreamies')) || 
        []
    );

    useEffect(()=>{
        // console.log("using useEffect because dreamies was updated");
        localStorage.setItem('storedDreamies', JSON.stringify(dreamies))
    },[dreamies]);

    return (
        <div className='outerDiv'>
            <div className='backgroundImage'></div>
            <div className='container logoDiv'>
                <img className='logo' src={require('./OPSign.png')} alt='logo'></img>
            </div>
            <div className='container picsDiv'>
                {
                    dreamies.map((villager,idx) => {
                        return(
                            <div key={idx}>
                                <img src={villager.image_url} alt={villager.name} className='villagerPic'/>
                            </div>
                        )
                    })


                }


            </div>
            <div className='formDiv container'>
                <div className='formDiv2'>
                    <Form
                        dreamies = {dreamies}
                        setDreamies = {setDreamies}
                    />
                </div>
            </div>
        </div>
    );
};

export default Display;
