import User from "../models/Users";
class UserController {
  async store(req, res) {
    const userExist = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (userExist) {
      return res.status(400).json({ error: "User email already exists!! " });
    }
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    console.log(req.userId);
    return res.json({ ok: "ok" });
  }
}

export default new UserController();
