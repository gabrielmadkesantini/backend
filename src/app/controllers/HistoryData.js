module.exports = {
  async storeData(req, res) {
    const { data, year, room_id } = req.body;
    try {
      const CreateHistoryData = await CreateHistoryData.storeData({
        data,
        year,
        room_id,
      });
      res.send({
        data,
        year,
        room_id,
      });
    } catch (erro) {
      res
        .send({
          message: "Não foi ppossível criar dados",
        })
        .status(401);
    }
  },
};
