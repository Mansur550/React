const Card = ({tittle}) =>{
  return (

    <div style= {{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#31363f',
      borderRadius: '10px',
      minHeight: '100px'


    }}>
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

