export default async (req, res) => {
  console.log(req.body)
  res.json({
    result: req.body
  });
};
