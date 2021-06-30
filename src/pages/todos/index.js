import React, { useEffect, useState } from "react";
import {
  Spinner,
  Card,
  Badge,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Modal,
} from "reactstrap";
import DeleteButton from "@comp/button/delete.js";
import UpdateButton from "@comp/button/update.js";
import TodosForm from "./form";
// import "./form.style.less";
import "./index.style.less";

export default function TodosPage(props) {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [apptoken, setApptoken] = useState(localStorage.getItem("apptoken"));

  useEffect(() => {
    console.log("useEffect didMount TodosPage");
    fetch("https://data.testxhr.com/api/todos?page=1", {
      method: "GET",
      headers: {
        apptoken: apptoken,
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      });
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
    setShowForm(!showForm);
  };
  console.log(items);

  function handleRemoveItem(id) {
    console.log(id);
    fetch(`https://data.testxhr.com/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        apptoken: apptoken,
      },
    }).then((response) => {
      if (response.ok) {
        //Делаю перерендер при успешном статусе ответа
        fetch("https://data.testxhr.com/api/todos?page=1", {
          method: "GET",
          headers: {
            apptoken: apptoken,
          },
        })
          .then((data) => data.json())
          .then((response) => {
            setItems(response.data);
            console.log(response.data);
          });
      }
    });
  }

  return (
    <div>
      <h1>TodosPage</h1>
      <Row>
        <Col lg={12}>
          <Button color="success" onClick={() => setShowForm(!showForm)}>
            {showForm ? "close" : "Add new Todos"}
          </Button>
        </Col>
      </Row>
      {showForm ? (
        <Modal isOpen={showForm} toggle={setShowForm} className="className">
          <TodosForm cb={addItem} id="formId" />
          <Button className="closeModal" onClick={() => setShowForm(!showForm)}>
            X
          </Button>
        </Modal>
      ) : null}
      {items.length != 0 ? (
        <div>
          {items.map((todos) => (
            <Card key={todos.id}>
              <CardBody>
                <CardTitle tag="h5">
                  # {todos.id} {todos.title}
                </CardTitle>
                <CardText>{todos.description}</CardText>
                <CardText>
                  {todos.completed ? (
                    <Badge color="success">Done</Badge>
                  ) : (
                    <Badge color="danger">Undone</Badge>
                  )}
                </CardText>
                <DeleteButton
                  thisId={todos.id}
                  data={todos}
                  click={handleRemoveItem}
                />
                <UpdateButton
                  thisId={todos.id}
                  data={todos}
                  click={handleRemoveItem}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <Spinner color="primary" />
      )}
    </div>
  );
}
