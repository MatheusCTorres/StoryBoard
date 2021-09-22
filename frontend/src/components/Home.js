import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const place = {
  textAlign: 'center',
  marginTop: '200px',
  marginLeft: '300px'
}

const Home = () => {
    return(
      <div style={place}>
      <Card className="text-center" style={{padding: "5px", display:"inline-block"}}>
        <Card.Header>1º ANO</Card.Header>
        <Card.Body>
          <Card.Title>Historico</Card.Title>
          <Card.Text>
            visualize as suas notas
          </Card.Text>
          <Button variant="primary">1º semestre</Button>
          <Button variant="primary">2º semestre</Button>
          </Card.Body>
    </Card>
    <Card className="text-center" style={{padding: "5px", display:"inline-block"}}>
        <Card.Header>2º ANO</Card.Header>
        <Card.Body>
          <Card.Title>Historico</Card.Title>
          <Card.Text>
            visualize as suas notas
          </Card.Text>
          <Button variant="primary">1º semestre</Button>
          <Button variant="primary">2º semestre</Button>
          </Card.Body>
    </Card>
    <Card className="text-center" style={{padding: "5px", display:"inline-block"}}>
        <Card.Header>3º ANO</Card.Header>
        <Card.Body>
          <Card.Title>Historico</Card.Title>
          <Card.Text>
            visualize as suas notas
          </Card.Text>
          <Button variant="primary">1º semestre</Button>
          <Button variant="primary">2º semestre</Button>
          </Card.Body>
    </Card>
  </div>
  )
}

export default Home;