import { router } from 'express'
import { registerUserController } from '../controllers/user.controller'
const userRouter = Router()
userRouter.post('/register', registerUserController)
export default userRouter