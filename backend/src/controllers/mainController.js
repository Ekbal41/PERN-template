exports.helloWorld = async (req, res) => {
  /* #swagger.tags = ['Main']*/
  res.status(200).json({ message: "Hello, World!" });
};
