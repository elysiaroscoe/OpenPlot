import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './form.css'
let photoData = require('./villagerphotos.json')
let villagerData = require('./villagerinfo.json')

const Form = (props) => {

    const {dreamies, setDreamies} = props;
    const [name, setName] = useState("")
    const history = useHistory("")

    //query photoData and add villager to dreamies array
    const addVillager = (e) => {
        e.preventDefault();
        const formVillager = {name: name}
        // console.log({formVillager})
        // console.log({photoData})
        villagerData = photoData.filter(villager => villager.name.toUpperCase() === formVillager.name.toUpperCase());
        // console.log({villagerData})
        if(villagerData[0] == null){
            let errorMessage = `We did not find a villager named ${formVillager.name}`;
            alert(errorMessage);
        } else{
            // console.log("A matching villager was found")
            //add the new villagerData into the dreamies array
            const dreamiesCopy = [...dreamies];
            dreamiesCopy.push({
                "name": villagerData[0].name,
                "image_url" : villagerData[0].variations[0].image_url
            })
            setDreamies(dreamiesCopy);
            setName("");
        }
    }

    const deleteVillager = (deleteIndex) => {
        // console.log("deleteIndex and villager",deleteIndex, dreamies[deleteIndex])
        const dreamiesCopy = [...dreamies];
        dreamiesCopy.splice(deleteIndex,1);
        // console.log(dreamiesCopy);
        setDreamies(dreamiesCopy)
    }

    const toDisplay = () => {
        history.push('/info')
    }

    return (
        <>
            <div className='container formHeader'>
                <h2 className='dreamiesH2'>My Dreamies</h2>
                <button className='navButton' onClick={toDisplay}>Information</button>
            </div>
            <form onSubmit = {addVillager} className='container inputFormat'>
                <input type="text" placeholder='  Search...' onChange = {(e) => setName(e.target.value)} value={name} className='formInput'></input>
                <button className='formButton' type="submit" value="Add Villager">Add Villager</button>
            </form>

            <div className='container villagerButtons'>
                {
                    dreamies.map((villager,idx) => {
                        return(
                            <div key={idx}>
                                <button className="deleteButton" value={idx} onClick={() => deleteVillager(idx)}>{villager.name}<img className = "deletePNG" src={require('./deletex.png')} alt='delete'></img></button>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Form;
