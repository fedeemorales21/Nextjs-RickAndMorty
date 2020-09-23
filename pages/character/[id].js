import Router, { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import Template from '../../component/template'

const Charater = ({character}) =>{ 
    const router = useRouter()
    const { id } = router.query
   
    return(
        <Template>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card mb-3" style={{ maxWidth: '100%' }}>
                        <div className="row no-gutters">
                            <div className="col-md-5">
                            <img src={character.image} className="card-img" alt={character.name} />
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>

                                <p className="card-text"><strong>Status:</strong> {character.status}</p>
                                <p className="card-text"><strong>Species:</strong> {character.species}</p>
                                <p className="card-text"><strong>Type:</strong> {character.type}</p>
                                <p className="card-text"><strong>Gender:</strong> {character.gender}</p>
                                <p className="card-text"><strong>Origin:</strong> {character.origin.name}</p>
                                
                            </div>
                            </div>
                        </div>
                    </div>

                    <button
                     className="btn btn-info d-block mx-auto"
                     onClick = { () => Router.push('/')}
                     >Back</button>
                </div>
            </div>

        </Template>
    )
}
      
Charater.getInitialProps = async ctx => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${ctx.query.id}`)
    const data = await res.json()
    return { character: data }
}
  
export default Charater