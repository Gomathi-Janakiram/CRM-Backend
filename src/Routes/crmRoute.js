import { Router } from "express";

const Routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("Get method successfull");
    })

    .post((req, res) => {
      res.send("POSt method successfull");
    });

  app
    .route("/contact/:contactId")
    .put((req, res) => {
      res.send("PUT method successfull");
    })

    .delete((req, res) => {
      res.send("DELETE method successfull");
    });
};

export default Routes;
