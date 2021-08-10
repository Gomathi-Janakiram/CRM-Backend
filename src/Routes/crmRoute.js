const Routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("Get method successfull");
      }
    )

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
