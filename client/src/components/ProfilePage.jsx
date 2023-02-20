import Header from './Header.jsx' 
import { useState, useRef, useEffect, react } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProfilePage = ( {games, handleAddGameBtn, handleEditGameBtn, handleEditProfileBtn, currentUser, handleDeleteGameClick} ) => {
    const [user, setUser] = useState(currentUser)
    const [profile, setProfile] = useState([])
    const navigate = useNavigate()

 const loggingOut = () => {
    localStorage.removeItem('token')
    navigate('/')
 }

 console.log(user)
    
    return(
        <div>
            <Header/> 
            <div id='logoutbtn-div'>
                <button id='logout-btn' onClick={() => { loggingOut() }}>Log out</button>
            </div>
            <div id='bio'>  
                <p>@profilename: {user.username}</p>
                <p>Favorite team: {user.fav_team}</p>
                {/* <p>First game attended: </p>
                <p>Total games attended: </p>  */}
                {/* <button id='edit-profile-btn' onClick={handleEditProfileBtn}>Edit profile</button>  */}
            </div>
            {/* <div>
                <h3>Record</h3>
                <h3>percentage </h3>
            </div>  */}
            <button id='addgame-btn' onClick={handleAddGameBtn}>
                Add game
                </button><br />
            <div id='game-table'>
                <div style={{display: 'flex', border: '1px solid rgb(6, 6, 87) '}}>
                    <div className='table-category'>Date</div>
                    <div className='table-category'>Result</div>
                    <div className='table-category'>Score</div>
                    <div className='table-category'>Opponent</div>
                    <div className='table-category'>Location</div>
                    <div className='table-category'>Starting Pitcher</div> 
                    <div className='table-category'>Note</div>
                </div>
                {
                    games.map((game) => {
                        return(
                            <div id='game' style={{ display: 'flex', border: '1px solid rgb(6, 6, 87) ' }}>
                                <div className='table-content'>{game.date}</div>  
                                <div className='table-content'>{game.result}</div>
                                <div className='table-content'>{game.score}</div>
                                <div className='table-content'>{game.opponent}</div>
                                <div className='table-content'>{game.location}</div>  
                                <div className='table-content'>{game.st_pitcher}</div>
                                <div id='game-note' className='table-content' style={{display: 'flex'}}>
                                    <div style={{ flex: '50%', textAlign: 'left' }}>{game.note}</div> 
                                    <div style={{ flex: '50%', textAlign: 'right'}}>
                                        <button id='deletegame-btn' onClick={handleDeleteGameClick}>X</button>
                                    </div>
                                </div>
                            </div>  
                        )
                    })
                }
            </div>
            {/* <button id='editgame' onClick={handleEditGameBtn}>Edit game</button> 
            <br/>
            <button onSubmit={() => {handleDeleteGameSubmit}}>Delete game</button> */}
        </div>
    )
}

export default ProfilePage  

    // <div id='game-table' />
    //     <table>
    //         <tr>
    //             <th>Date</th>
    //             <th>Result</th>
    //             <th>Score</th>
    //             <th>Opponent</th>
    //             <th>Location</th>
    //             <th>Starting Pitcher</th>
    //             <th>Note</th>
    //         </tr>
    //         {
    //             games.map((game) => {
    //                 return (
    //                     <tr>
    //                         <th>
    //                             {game.date}
    //                         </th>
    //                         <th>
    //                             {game.result}
    //                         </th>
    //                         <th>
    //                             {game.score}
    //                         </th>
    //                         <th>
    //                             {game.opponent}
    //                         </th>
    //                         <th>
    //                             {game.location}
    //                         </th>
    //                         <th>
    //                             {game.st_pitcher}
    //                         </th>
    //                         <th>
    //                             {game.note}
    //                         </th>
    //                     </tr>
    //                 )
    //             })
    //         }
    //     </table>   
    // </div>  