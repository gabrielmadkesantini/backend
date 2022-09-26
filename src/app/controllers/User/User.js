const { User, Room } = require("../../models/index.js");

module.exports = {
  async getUser(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      include: Room,
    });
    if (!user) {
      return res
        .json({
          massage: "Usuario Inexistente",
        })
        .status(501);
    }
    res.json(user);
  },
};
