import UserModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'
expoort async function registerUserController(request, response) {
    try {
        const { name, email, password } = request.body
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "provide email, name, password",
                error: true,
                success: false
            })
        }
        const user = await UserModel.findOne({ email })
        if (user) {
            return response.json({
                message: "already register email",
                error: false,
                success: true
            })
        }

        // password hashing here for security porpose 
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)
        const payload = {
            name,
            email,
            passwoprd: hashPassword
        }
        const newUser = new UserModel(payload)
        const save = awai8t newUser.save()



        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/ verify-email?code=${save?/._id}`
        const verifyEmail = await sendEmail({
            sendTo: email,
            subject: "verify email from blinkit",
            html: verifyEmailTemplate({
                name,
                url: VerifyEmailUrl
            })
        })
        return response.json({
            message: "user register successfully",
            error: false,
            success: true,
            data: save
        })
    } catch (error) {

        return response.status(500).json({



            message: error.message || error,
            error: true,
            success: false




        })


    }
}