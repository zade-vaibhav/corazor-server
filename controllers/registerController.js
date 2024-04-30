import UserModel from '../models/userModel.js'; // Assuming this is the path to your user model
import { sendEmailToUser, sendEmailToOwner } from '../services/emailService.js';


const registerController = async (req, res) => {

    try {
        const { name, email, message, phone, services } = req.body;
        
  
        let preferedServices = [] 
        if (services.Technology !== "") { 
            preferedServices.push(services.Technology)
            if (services.Marketing !== "") {
                preferedServices.push(services.Marketing)
                if (services.Legal !== "") {
                    preferedServices.push(services.Legal)
                } 
            } else {
                if (services.Legal !== "") {
                    preferedServices.push(services.Legal)
                }
            }

        } else {
            if (services.Marketing !== "") {
                preferedServices.push(services.Marketing)
                if (services.Legal !== "") {
                    preferedServices.push(services.Legal)
                }
            } else {
                if (services.Legal !== "") {
                    preferedServices.push(services.Legal)
                }
            }
        }

      
        // Check if the user already exists
        let existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            // User exists, update the message
            existingUser.message.push({ message, preferedServices });
            await existingUser.save();

            sendEmailToUser(existingUser.name, email);
            sendEmailToOwner(existingUser.name,existingUser.email,existingUser.phone,message,preferedServices);
            res.status(200).json({ success: true, message: 'User message updated' });
        } else {
            // User doesn't exist, create a new user
            const newuser = { name, email,phone, message: { message: message, preferedServices } }
            const user = await new UserModel(newuser).save();

            sendEmailToUser(name, email);
            sendEmailToOwner(name,email,phone,message.message,preferedServices);

            res.status(201).json({ success: true, message: 'User registered successfully', user: newuser });
        } 
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default registerController;