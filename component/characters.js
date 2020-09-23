import Router from 'next/router'

const Characters = (props) => (

    <ul className="list-group">
        {
            props.characters.map(character =>(
                <li 
                    className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                    key = {character.id}
                    onClick = { () => Router.push('/character/[id]', `/character/${character.id}`)}>
                    <div>
                        <h4>{character.name}</h4>
                        <h5>{character.species} - {character.gender}</h5>
                    </div>
                    <img 
                        src={character.image} 
                        alt={character.name} 
                        style={{borderRadius: "50%", width: '200px'}}/>
                </li>   
            ))
        }
    </ul>
  
)

export default Characters