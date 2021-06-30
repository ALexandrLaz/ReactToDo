import React from "react";
// import "./header.style.less";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
export default function FormsAddChange(props) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Заголовок</Label>
          <Input
            type="text"
            name="title"
            id="exampleEmail"
            placeholder="Заголовок"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Описание</Label>
          <Input
            type="text"
            ref={element}
            name="description"
            id="exampleEmail"
            placeholder="Описание"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSwitch">Выполнен / Не выполнен</Label>
          <div>
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
            />
          </div>
        </FormGroup>
        <Label for="deadline">Дедлайн</Label>
        <DatePicker id="deadline" />
        <FormGroup>
          <Button color="warning">Update</Button>
          <Button>Cancel</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
