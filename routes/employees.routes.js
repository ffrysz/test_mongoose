const express = require('express');
const router = express.Router();
// const db = require('./../db');
const ObjectId = require('mongodb').ObjectId;
const EmployeeController = require('../controllers/employee.controller');

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getById);

router.post('/employees', EmployeeController.post);

router.put('/employees/:id', EmployeeController.put);

router.delete('/employees/:id', EmployeeController.delete);

// router.get('/employees', (req, res) => {
//   req.db.collection('employees').find().toArray((err, data) => {
//     if (err) res.status(500).json({ message: err });
//     else res.json(data);
//   });
// });

// router.get('/employees/random', (req, res) => {
//   req.db.collection('employees').aggregate([{ $sample: { size: 1 } }]).toArray((err, data) => {
//     if (err) res.status(500).json({ message: err });
//     else res.json(data[0]);
//   });
// });

// router.get('/employees/:id', (req, res) => {
//   req.db.collection('employees').findOne({ _id: ObjectId(req.params.id) }, (err, data) => {
//     if (err) res.status(500).json({ message: err });
//     else if (!data) res.status(404).json({ message: 'Not found' });
//     else res.json(data);
//   });
// });

// router.post('/employees', (req, res) => {
//   const { firstName, lastName } = req.body;
//   req.db.collection('employees').insertOne({ firstName: firstName, lastName: lastName }, err => {
//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK' });
//   });
// });

// router.put('/employees/:id', (req, res) => {
//   const { firstName, lastName } = req.body;
//   req.db.collection('employees').updateOne({ _id: ObjectId(req.params.id) }, { $set: { firstName: firstName, lastName: lastName } }, err => {
//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK' });
//   });
// });

// router.delete('/employees/:id', (req, res) => {
//   req.db.collection('employees').deleteOne({ _id: ObjectId(req.params.id) }, err => {
//     if (err) res.status(500).json({ message: err });
//     else res.json({ message: 'OK' });
//   });
// });

module.exports = router;
