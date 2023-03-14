import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CrearOfertaValor() {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
      if (inputText.length < 20) {
        setErrorMessage("La oferta de valor debe tener al menos 20 caracteres");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleImageUpload = (event) => {
    const inputURL = event.target.value;
    setImageURL(inputURL);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, imageURL);
    // Your code to handle form submission goes here
  };

  return (
    <div className="maincontainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFreeText">
          <Form.Label>
            Agrega tu oferta de valor, un resumen de lo que te destaca{" "}
          </Form.Label>
          <br />
          <br />
          <div>
            <Form.Control
              as="textarea"
              rows={3}
              required
              maxLength={500}
              value={text}
              placeholder="La reseña debe tener entre 20 y 500 caracteres"
              onChange={handleChange}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </Form.Group>
        <br />

        <Form.Group controlId="formImageURL">
          <Form.Label>Sube una URL con una imagen para tu perfil</Form.Label>
          <Form.Control
            type="url"
            required
            placeholder="https://example.com/image.jpg"
            value={imageURL}
            onChange={handleImageUpload}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="consolas-font">
          Guardar Oferta de Valor
        </Button>
      </Form>
    </div>
  );
}


