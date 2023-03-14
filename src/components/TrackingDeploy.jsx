import { Container, Card } from "react-bootstrap";
import CommentTable from "./Comentarios";

import AlertTxt from "./Alert";

const date = new Date().toLocaleDateString();

const randomName = "Francisco";

function TrackingDeploy() {
  return (
    <>
      <div className="maincontainer">
        <Card className="text-center maincontainer">
          <Card.Header>
            <h1>Seguimiento</h1>
            <br />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h2>S001</h2>
            </Card.Title>
            <br />
            <Card.Text>Fecha de solicitud: {date}</Card.Text>
            <Card.Text>Nombre del solicitante: {randomName}</Card.Text>
            <br />
            <Card.Text>
              Proyecto: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Similique, eum.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <AlertTxt />
        <br />
        <CommentTable />
      </div>
    </>
  );
}

export default TrackingDeploy;
