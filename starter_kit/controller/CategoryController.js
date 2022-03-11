const express = require("express");
const Food_Category = require("../models/Food_Category");


const allCategory = (req, res) => {
    Food_Category.findAll()
    .then((data) => res.json({data:data}))
    .catch((err) => res.json({data:err}))
};
const createCategory = (req, res) => {
    Food_Category.create(req.body)
    .then((result) => res.json({success:true, data: result}))
    .catch((err) => res.json({data:err}))
};
const saleCategory = (req, res) => {
    Food_Category.findAll({where: { name : 'Amttan' }})
    .then((result) => res.json({success:true, data: result}))
    .catch((err) => res.json({data:err}))
};
const idCategory =  (req, res, next) => {
    const id = req.params.id;
    Food_Category.update(req.body ,{where: {id}})
    .then((data) => res.json({success : true, data: "successfully updated!"}))
    .catch((err) => res.json({success : false, data: "can not updated!"}))
};
const deleteCategory = (req, res, next) => {
    const id = req.params.id;
    Food_Category.destroy( {where: {id}})
    .then((data) => res.json({success : true, data: "successfully deleted!"}))
    .catch((err) => res.json({success : false, data: "can not deleted!"}))
};

module.exports = {
    allCategory,
    createCategory,
    saleCategory,
    idCategory,
    deleteCategory
  };
