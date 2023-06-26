import Data from "../models/model.js";

//get all data
export const getAll = (req, res) => {
  Data.find().then((data) => res.send(data));
};

//get data by id
export const getById = (req, res) => {
  const id = req.params.id;
  Data.findById(id).then((data) => res.send(data));
}

//create new data
export const createNew = (req, res) => {
  const newData = new Data({
    name: req.body.name,
  });
  newData.save(newData).then((data) => res.send(data));
};

//update by id
export const updateOne = (req, res) => {
  const id = req.params.id;
  Data.findByIdAndUpdate(id, {
    name: req.body.name,
  }).then((data) => res.send(data));
};

//delete by id
export const deleteOne = (req, res) => {
  const id = req.params.id;
  Data.findByIdAndDelete(id)
    .then((data) => res.send({ message: "Data was deleted successfully" }))
    .catch((error) => res.send({ message: "Data was not deleted" }));
};