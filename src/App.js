import React, {useState} from 'react';

function Form(){

  const [quote,updateQuote] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptom: ''
  })

  const updateState = (e) =>{
    updateQuote({
      ...quote,
      [e.target.name] : e.target.value
    })
  }

  console.log(quote);

  return (
    <React.Fragment>
      <h2>Create quote</h2>
      <form>
                  <label>Pet Name</label>
                  <input 
                    type="text" 
                    name="pet"
                    className="u-full-width" 
                    placeholder="Pet Name" 
                    onChange={updateState}
                  />

                  <label>Owner Name</label>
                  <input 
                    type="text" 
                    name="owner"
                    className="u-full-width"  
                    placeholder="Owner name" 
                  />

                  <label>Date</label>
                  <input 
                    type="date" 
                    className="u-full-width"
                    name="date"
                  />               

                  <label>Hour</label>
                  <input 
                    type="time" 
                    className="u-full-width"
                    name="hour" 
                  />

                  <label>Symptom</label>
                  <textarea 
                    className="u-full-width"
                    name="symptom"
                  ></textarea>

                  <button type="submit" className="button-primary u-full-width">Add</button>
          </form>
  </React.Fragment>
  )
}

function App() {
  //useState returns 2 functions
  //the actual state = this.state
  //Function that updates the state = this.setState()
  const [quotes, updateQuotes] = useState([]);

  return(
    <React.Fragment>
      <h1>Patient manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form/>
          </div>
          <div className="one-half column">
          
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;