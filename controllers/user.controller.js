import UserModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { sendEmail, verifyEmailTemplate } from '../utils/email.js'; // Assuming you have a sendEmail function and email template

dotenv.config();

export async function registerUserController(request, response) {
    try {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(400).json({
                message: "provide email, name, password",
                error: true,
                success: false
            });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return response.json({
                message: "already registered email",
                error: true,
                success: false
            });
        }

        // Password hashing for security purposes

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashPassword // Corrected the typo in 'password'
        };

        const newUser = new UserModel(payload);
        const save = await newUser.save();

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`; // Corrected typo and removed unnecessary characters
        await sendEmail({
            sendTo: email,
            subject: "Verify email from Blinkit",
            html: verifyEmailTemplate({
                name,
                url: VerifyEmailUrl
            })
        });

        return response.json({
            message: "user registered successfully",
            error: false,
            success: true,
            data: save
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false

        });
    }
}