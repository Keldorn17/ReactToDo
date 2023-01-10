import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { ListGroup, ListGroupItem, Input, Form } from "reactstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { allTodos, addTodo, delTodo, updateTodo } from "./utils";

export const Todo = () => {
  const { data, status } = useQuery("todos", allTodos);
  const [newItem, setNewItem] = useState("");

  status === "success" && console.log(data);
  const queryClient = useQueryClient();

  const mutationAdd = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setNewItem("");
    },
  });

  const mutationDel = useMutation(delTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const mutationUpdate = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  return (
    <div className="container text-center todo">
      <h3>My Todos</h3>
      <Form className="mb-1 d-flex">
        <Input
          placeholder="add todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <i
          className="fa-solid fa-plus fa-4x btn btn-primary"
          onClick={() =>
            newItem !== ""
              ? mutationAdd.mutate({ newItem: newItem })
              : alert("Please enter a todo")
          }
        ></i>
      </Form>
      <ListGroup>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error...</p>}
        {status === "success" &&
          data.map((obj) => (
            <ListGroupItem
              key={obj.id}
              className="d-flex justify-content-between align-items-center"
            >
              <i
                className={
                  `fa-solid fa-check fa-2x ${obj.status === 1 && "text-success"}`
                }
                onClick={() => mutationUpdate.mutate({ id: obj.id })}
              ></i>
              <span className={obj.status === 1 ? "text-decoration-line-through" : ""}>{obj.name}</span>
              <i
                className="fa-solid fa-trash text-danger fa-2x"
                onClick={() => mutationDel.mutate({ id: obj.id })}
              ></i>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};
