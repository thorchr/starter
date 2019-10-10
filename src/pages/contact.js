import React from "react"
import Layout from "../components/layout"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class ContactPage extends React.Component{



  state = {
    firstName: "",
    lastName: "",
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}! ${this.state.email}!`)
  }



  render() {


   

    return (<Layout>
              <form onSubmit={this.handleSubmit}>
            <TextField
            type="text"
            name="firstName"
            label="Fornavn"
            margin="normal"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
		     <br />
          <TextField
            type="text"
            name="lastName"
            label="Etternavn"
            margin="normal"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            type="text"
            name="email"
            label="E-post"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <TextField
        id="standard-multiline-static"
        label="Beskjed"
        multiline
        rows="4"
        defaultValue="Skriv her"
        margin="normal"
      />
          <br />
          <br />
         <Button type="submit" variant="contained" color="primary">
          Send
      </Button>
      </form>

           </Layout>
    )
  }

} 