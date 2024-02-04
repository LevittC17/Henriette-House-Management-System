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

// Filter files (optional)
const fileFilter = (req, file, cb) => {
    // Reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  // Initialize Multer
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
    },
    fileFilter: fileFilter
}).fields([{ name: 'name', maxCount: 1 }, { name: 'housePhoto', maxCount: 1 }, { name: 'description', maxCount: 1 }]);

  const getImages = async (req, res, next) => {
    try {
        var properties = await houseModel.find({});
        var images = properties.map(property => ({
            housePhoto: req.protocol + '://' + req.get('host') + '/' + property.housePhoto
        }));
        res.status(StatusCodes.OK).json({
            images
        });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({message: error.message});
    }
};

const create = async (req, res, next) => {
    // Use Multer middleware
    upload(req, res, async function(err) {
      if (err instanceof multer.MulterError) {
        return res.status(StatusCodes.BAD_REQUEST).json({message: err.message});
      } else if (err) {
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
          profilePhoto: req.files.profilePhoto[0].path,
          housePhoto: req.files.housePhoto[0].path
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
    getImages,
    create,
    list,
    update,
    remove
}