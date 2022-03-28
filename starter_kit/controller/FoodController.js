const express = require("express");
const db = require("../models");
const Food = db.Food;
const {Op} = require('sequelize');

const get_foods = (req, res, next) => {};

const allFood = (req, res) => {
  Food.findAll()
  .then((data) => res.send(data))
  .catch((err) => res.json({message:err.message}))
};
const createFood = (req, res) => {
  Food.create(req.body)
  .then((result) => res.json({success:true, data: result}))
  .catch((err) => res.json({data:err}))
};
const priceCondition = (req, res, next) => {
  Food.findAll({where: { price : {[Op.gt]: 3000} }})
  .then((data) => res.json({data: data}))
  .catch((err) => res.json({data:err}))
};
const updateFood =  (req, res, next) => {
  const id = req.params.id;
  Food.update(req.body ,{where: {id}})
  .then((data) => res.json({success : true, data: "successfully updated!"}))
  .catch((err) => res.json({success : false, data: "can not updated!"}))
};
const deleteFood =  (req, res, next) => {
  const id = req.params.id;
  Food.destroy( {where: {id}})
  .then((data) => res.json({success : true, data: "successfully deleted!"}))
  .catch((err) => res.json({success : false, data: "can not deleted!"}))
};


module.exports = {
  get_foods,
  allFood,
  createFood,
  priceCondition,
  updateFood,
  deleteFood
};

