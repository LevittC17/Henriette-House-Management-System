const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tracuna005@gmail.com',
                pass: 'jovdwtoalonnqovc',
            },
        });

        const options = {  
            from: "tracuna005@gmail.com",
            to: email,
            subject: subject,
            text: text
        };

        await transporter.sendMail(options, function(error, infor) {
            if (error) {
                console.log("Failed to save email: "+error);
                return error;
            } else {
                console.log("Email Sent: "+infor.response);
                return "Email Sent: "+infor.response;
            }
        });
    } catch (error) {
        return error;
    }
}

module.exports = sendEmail;
