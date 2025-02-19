import jwt from 'jsonwebtoken'
const generatedAccessToken = async(userId) => {
    const token = await jwt.sign({ Id: userId }, process.env.SECRET_KEY_ACCESS_TOKEN, { expiresIn: '5h' })
    return token
}
export default generatedAccessToken