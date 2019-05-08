import React, {useState} from 'react';

function Quote(props){
  return(
    <div className="cita">
      <p>Pet : <span>{props.quote.pet}</span></p>
      <p>Owner: <span>{props.quote.owner}</span></p>
      <p>Date: <span>{props.quote.date}</span></p>
      <p>Hour: <span>{props.quote.hour}</span></p>
      <p>Symptom: <span>{props.quote.symptom}</span></p>
      <button onClick={() => props.deleteQuote(props.quote.index)} type="button" className="button eliminar u-full-width">Delete X</button>
    </div>
  )
}

function Form(props){

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

  const sendQuote = (e) =>{
    e.preventDefault();
    props.createQuote(quote);
  }

  return (
    <React.Fragment>
      <h2>Create quote</h2>
      <form onSubmit={sendQuote}>
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
                    onChange={updateState}
                  />

                  <label>Date</label>
                  <input 
                    type="date" 
                    className="u-full-width"
                    name="date" 
                    onChange={updateState}
                  />               

                  <label>Hour</label>
                  <input 
                    type="time" 
                    className="u-full-width"
                    name="hour" 
                    onChange={updateState}
                  />

                  <label>Symptom</label>
                  <textarea 
                    className="u-full-width"
                    name="symptom" 
                    onChange={updateState}
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

  const createQuote = (quote) =>{
    const newQuotes = [...quotes, quote];
    updateQuotes(newQuotes); 
  }

  const deleteQuote = (index) =>{
    const newQuotes = [...quotes];
    newQuotes.splice(index,1);
    updateQuotes(newQuotes);
  }

  const title = Object.keys(quotes).length === 0 ? 'there are no appointments' : 'manage the appointments here';

  return(
    <React.Fragment>
      <h1>Patient manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form
                createQuote={createQuote}
              />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {quotes.map((quote, index) => (
              <Quote
                key={index} 
                index={index}
                quote={quote} 
                deleteQuote={deleteQuote}
              />
            ))

            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;