import {
  AddContact,
  getContact,
  getContactWithId,
  updateContact,
  deleteContact,
} from "../Controllers/crmController";



const Routes = (app) => {
  app.route("/contact")
    // to get all the contacts
    .get(
      // middleware
      (req, res, next) => {
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      getContact
    )

    // to create a contact
    .post(AddContact);


  app.route("/contact/:contactId")
    // to get a specific contact
    .get(getContactWithId)

    // to update a contact
    .put(updateContact)
    

  app.route("/contact/delete")
     // to delete a contact
    .delete(deleteContact);
};

export default Routes;
