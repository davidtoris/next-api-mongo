import connectBD from "../../src/config/db";
import bcrypt from 'bcrypt';
import User from '../../src/models/User.model';
connectBD();


const handler = async (req, res) => {
  if (req.method === 'GET') {
    const user = await User.find();
    return res.status(200).send(user);
  }
  if (req.method === 'POST') {

    const { email, password} = req.body;

    // Validate if email exist 
    const emailExist = await User.findOne({ email })
    if(emailExist){
      return res.status(400).json({ "msg": "Este correo ya esta registrado" });
    }

    const user = new User(req.body);
    
    // Hash Pasword
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password.toString(), salt);
    
    // Save new User
    await user.save();
    return res.status(200).json({"msg": "ok"});
  }


}

export default handler