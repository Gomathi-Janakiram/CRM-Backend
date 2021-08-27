import mongoose from "mongoose";
import ContactSchema from "../Models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const AddContact = (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.send(contact);
    }
  });
};

export const getContact = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  });
};

export const getContactWithId = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      } else {
        res.json(contact);
      }
    }
  );
};

export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.body._id }, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Successfully deleted contact" });
    }
  });
};
