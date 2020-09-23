import Template from '../component/template'
import fetch from 'isomorphic-fetch'
import Characters from '../component/characters'

const Home = ({ characters }) => (
    <Template>
        <h1>Characters: </h1>
        <Characters characters={characters}/>
    </Template>
)
  
Home.getInitialProps = async ctx => {
    const ids = generateIDs()
    const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`)
    const data = await res.json()
    return { characters: data }
}

const generateIDs = () =>{
    let list = ''
    for (let i = 0; i < 100; i++) {
        list +=`${Math.floor(Math.random()*671)},`       
    }
    return list.slice(0,-1)
}

export default Home