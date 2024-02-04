
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Property name is required']
    },
    /* profilePhoto: {
        type: String,
        required: [true, 'Profile photo is required']
    }, */
    housePhoto: {
        type: String,
        required: [true, 'House photo is required']
    },
    description: {
        type: String,
        required: [true, 'Property description is required']
    }
});






//     propertyName: {
//         type: String,
//         unique: true,
//         required: [true, "Property name is required"]
//     },
//     propertyPicture: {
//         type: String,
//         required: [true, "Property picture is required"],
//         default: "https://media.istockphoto.com/id/1145780239/photo/dark-interior-with-open-kitchen.jpg?s=612x612&w=0&k=20&c=sigz2x-O26RYwC49hKqozEJxrFX4CR9zqiTCTSXx9e4="

//     },
//     description: {
//         type: String,
//         required: [true, "The Description of Property is required"]

//     },

//     Location: {
//         type: String,
//         required: [true, "The Location of Property is required"]
//     },
//     address: {
//         type: String,
//         required: [true, "The Address of Property is required"]
//     },

//     bedrooms: {
//         type: String,
//         required: [true, "The Address of Property is required"]
//     },
//     bathrooms: {
//         type: String,
//         required: [true, "The Address of Property is required"]
//     },
//     surface: {
//         type: String,
//         required: [true, "The Address of Property is required"]
//     },
//     agent: {
//         image: {
//             type: String,
//             required: [false, "The Image of Property is required"]
//         },
//         name: {
//             type: String,
//             required: [true, "The Name of the owner is required"]
//         },
//         email: {
//             type: String,
//             required: [true, "The email is required"],
//             unique: true,
//             match: [
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                 'Please provide a valid email',
//             ]
//         },
//         phone: {
//             type: String,
//             required: [true, "The phone of the owner is required"]
//         },
//         message: {
//             type: String,
//             required: [true, "The message is required"]
//         }
//     },
//     cost: {
//         type: String,
//         required: [true, "The Cost of Property is required"]

//     }


// });

module.exports = mongoose.model('house', adminSchema);