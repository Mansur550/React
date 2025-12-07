const Card = ({tittle}) =>{
  return (

    <div className="card">
      <h2>{tittle}</h2>
    </div>
  )
}

const App = () => {
  return(
    <div className="card-container" >
    
    <Card tittle="Top Gun" rating= {5} isCool={true} actors={[ {name : 'Tom'}]} />
    <Card tittle="Star Wars " />
    <Card tittle= "The Lion King "/>


    </div>
  )

}

export default App

