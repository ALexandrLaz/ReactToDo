import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import "./form.style.less";

export default function TodosForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(formPost);
    console.log(formData.get("completed"));
    formData.get("completed") === null
      ? formData.set("completed", 0)
      : formData.set("completed", 1);
    console.log(formData.get("completed"));
    fetch("https://data.testxhr.com/api/todos", {
      method: "POST",
      headers: {
        apptoken: localStorage.getItem("apptoken"),
      },
      body: formData,
    })
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        props.cb(response);
      });
  };

  return (
    <div className="modalWindow">
      <Form onSubmit={handleSubmit} className="formPost" id="formPost">
        <FormGroup>
          <Label for="exampleHeader">Заголовок</Label>
          <Input
            type="text"
            name="title"
            id="exampleHeader"
            placeholder="Заголовок"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDescription">Описание</Label>
          <Input
            type="text"
            name="description"
            id="exampleDescription"
            placeholder="Описание"
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Дедлайн</Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="completed" id="switch" />
            Выполнен / Не выполнен
          </Label>
        </FormGroup>
        <FormGroup>
          <Button color="success">Add</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
