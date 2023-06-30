const Data = require("../models/model.js");

//get all data
const getAll = async (req, res) => {
  try {
    await Data.find().then((data) => res.send(data));
  } catch (err) {
    res.send(err);
  }
};

//get data by id
const getById = async (req, res) => {
  try {
    const id = req.params.id;
    await Data.findById(id).then((data) => res.send(data));
  } catch (err) {
    res.send(err);
  }
};

//create new data
const createNew = async (req, res) => {
  try {
    const newData = new Data({
      name: req.body.name,
    });
    await newData.save(newData).then((data) => res.send(data));
  } catch (error) {
    res.send(err);
  }
};

//update by id
const updateOne = (req, res) => {
  try {
    const id = req.params.id;
    Data.findByIdAndUpdate(id, {
      name: req.body.name,
    }).then((data) => res.send(data));
  } catch (error) {
    res.send(err);
  }
};

//delete by id
const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    await Data.findByIdAndDelete(id).then((data) =>
      res.send({ message: "Data was deleted successfully" })
    );
  } catch (error) {
    res.send({ message: "Data was not deleted" }, error);
  }
};

module.exports = { getAll, getById, createNew, updateOne, deleteOne };
