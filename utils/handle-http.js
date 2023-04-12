const handleHttp = (res, error, errRaw) => {
  console.log(errRaw);
  return res.status(400).json({ success: false, error });
};

module.exports = handleHttp;
