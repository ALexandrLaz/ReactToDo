import React from "react";
import { Button } from "reactstrap";

export default function UpdateButton({ data, click }) {
  //Сюда нужно передать весь массив данных + id элемента, который отправил событие
  return (
    <div>
      <Button color="info" onClick={() => click(data.id)}>
        Update
      </Button>
    </div>
  );
}
