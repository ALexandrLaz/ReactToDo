import React from "react";
import { Button } from "reactstrap";

export default function DeleteButton({ data, click }) {
  //Сюда нужно передать весь массив данных + id элемента, который отправил событие
  return (
    <div>
      <Button color="danger" onClick={() => click(data.id)}>
        Delete
      </Button>
    </div>
  );
}
