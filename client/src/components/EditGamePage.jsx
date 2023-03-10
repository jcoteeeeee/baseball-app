import Header from './Header.jsx'  
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const EditGamePage = () => {
    const navigate = useNavigate()  
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState('')  
    const [opponent, setOpponent] = useState('')
    const [location, setLocation] = useState('')
    const [stPitcher, setStPitcher] = useState('')  
    const [note, setNote] = useState('')  

    console.log(date)

    const handleEditGameSubmit = (e) => {
        e.preventDefault()  
        console.log('submitted') 
        navigate('/profilepage')   
        const editGame = async (e, games) => {
            let req = await fetch(`http://localhost:3000/games/${games.id}`, {
                method: 'PATCH', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({
                    user_id: 1, 
                    date: date, 
                    score: score, 
                    opponent: opponent, 
                    location: location, 
                    st_pitcher: stPitcher, 
                    note: note
                })
            })
        }
        editGame()
    } 

    return(
        <div>
            <Header/>  
            <div className='game-container'> 
                <form id='editgame-form' className='game-form' onSubmit={handleEditGameSubmit}>
                    <label className='game-label'>Date</label>
                    <input className='game-input' value={date} type='date' name='edit_date' onChange={(e) => setDate(e.target.value)}/>
                    <br />
                    <label className='game-label'>Result</label>
                    <input className='game-input' value={result} type='text' name='edit_result' onChange={(e) => setResult(e.target.value)}/>
                    <br />
                    <label className='game-label'>Score</label>
                    <input className='game-input' value={score} type='text' name='edit_score' onChange={(e) => setScore(e.target.value)}/>
                    <br />  
                    <label className='game-label'>Opponent</label>
                    <input className='game-input' value={opponent} type='text' name='edit_opp' onChange={(e) => setOpponent(e.target.value)}/>  
                    <br/>
                    <label className='game-label'>Location</label>
                    <input className='game-input' value={location} type='text' name='edit_location' onChange={(e) => setLocation(e.target.value)}/>  
                    <br/>
                    <label className='game-label'>Starting pitcher</label>
                    <input className='game-input' value={stPitcher} type='text' name='edit_stp' onChange={(e) => setStPitcher(e.target.value)}/>
                    <br />
                    <label className='game-label'>Note</label>
                    <input className='game-input' value={note} type='text' name='edit_note' onChange={(e) => setNote(e.target.value)}/>
                    <br />
                    <button className='game-btn' type='submit'>Save changes</button> 
                </form>     
            </div> 
        </div>
    )
}  

export default EditGamePage 