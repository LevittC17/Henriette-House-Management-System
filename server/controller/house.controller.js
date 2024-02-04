const validator = require('validator');
const { StatusCodes } = require('http-status-codes');
const houseModel =require('../models/house.model');
const multer = require('multer');

// Set up Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname); 
    }
});

const upload = multer({ storage: storage });

const create = async (req, res, next) => {
    // Use Multer middleware
    upload.array('photos', 2)(req, res, async function(err) {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json({message: err.message});
      }
  
      try {
        // Access the uploaded files with req.files
        if (!req.files) {
          return res.status(StatusCodes.BAD_REQUEST).json({message: 'No files uploaded'});
        }
  
        // Create a new property with the uploaded files
        var recordedProperty = await houseModel.create({
          ...req.body,
          profilePhoto: req.files[0].path,
          housePhoto: req.files[1].path
        });
  
        res.status(StatusCodes.CREATED).json({
          message: 'property recorded successfully',
          recordedProperty
        });
      } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({message: error.message});
      }
    });
};

/* const create = async (req, res, next) => {

    try {
        var recordedProperty = await houseModel. create(req.body);
        res.status(StatusCodes.CREATED).json({
            message: 'property recorded successfully',
            recordedProperty
        })
        res.status(500).json({message: 'property already exists'}) 
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST) .json({message:error.message});
        
    }
}; */

const list = async (req, res, next) => {
    try {
        var allProperty = await houseModel.find({});
        res.status(StatusCodes.ACCEPTED).json({
            allProperty
        });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error);
        
    }
};

const update = async (req, res, next) => {
    try {
        console.log(req.body);
        var updatedHouse = await houseModel.findByIdAndUpdate({_id:req.query.id},req.body);
        var house = await houseModel.find(updatedHouse._id);
    
        res.status(StatusCodes.CREATED).json({
        message:'house updated successfully',
        house
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
};
const remove = async (req, res, next) => {
    try{
        var deletedProperty = await houseModel.findByIdAndDelete(req.query.id);
        if(deletedProperty) {
            res.status(200).json({
                message: "This property has been deleted successfully",
            });
        }
        else{
            res.status(StatusCodes.NOT_FOUND).send("This house is not found!");
        }
    }
    catch(error){
        res.status(StatusCodes.BAD_REQUEST) .json({message:error.message});
    }
}

module.exports ={
    create,
    list,
    update,
    remove
}