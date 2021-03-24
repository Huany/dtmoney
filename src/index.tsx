import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({

  models : {
    transaction: Model
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 01",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
