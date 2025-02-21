import UserModel from "../models/user.model"

const generateRefreshToken = async(userId) => {
    const token = await jwt.sign({ Id: userId }, process.env.SECRET_KEY_ACCESS_TOKEN, { expiresIn: '30d' })
    return token
}const updateRefreshTokenUser = await UserModel.updateOne({
    _id: userId
, })