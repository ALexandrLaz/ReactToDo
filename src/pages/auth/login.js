import React from "react";
import { Redirect } from "react-router-dom";
import Message from "@comp/message";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
export default class Authorize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pas: "",
      redir: null,
      message: {
        text: "Введите правильный пароль",
        status: null,
        type: "danger",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }
  handleChange(e) {
    this.setState({
      pas: e.target.value,
      message: {
        text: "Поздравляю, вы вошли",
        status: true,
        type: "success",
      },
    });
  }

  handleClick() {
    //console.log(pas);
    // отправляю запрос на сервер и если он приходит со статусом ок, тогда все хорошо, если нет, то неверный пароль
    fetch("https://data.testxhr.com/api/todos", {
      method: "GET",
      headers: { apptoken: this.state.pas },
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        localStorage.setItem("apptoken", this.state.pas); // Сохранил apptoken в локальное хранилище
        this.setState({ redir: true });
      } else {
        this.setState({
          message: {
            text: "Введите правильный пароль",
            status: false,
            type: "danger",
          },
        });
      }
    });
    this.hideNotification(3000);
  }

  hideNotification(time) {
    setTimeout(() => {
      this.setState({
        message: {
          status: null,
          text: "",
          type: "danger",
        },
      });
    }, time);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Введите свой пароль для авторизации</CardTitle>
            <Form
              id="formElement"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
            <Button color="success" onClick={this.handleClick}>
              Registration
            </Button>
            {this.state.redir ? <Redirect push to="/todos" /> : null}
            {this.state.message.status == false ? (
              <Message
                type={this.state.message.type}
                message={this.state.message.text}
              />
            ) : null}
          </CardBody>
        </Card>
      </div>
    );
  }
}
