const customHeader = (req, res, next) => {
  try {
    const api_key = req.headers.api_key;
    if (api_key !== 'api') {
      return res.status(403).json({ success: false, error: 'INVALID_API_KEY' });
    }
    next();
  } catch (e) {
    res.status(403).json({ success: false, error: 'ERROR_HEADERS' });
  }
};

module.exports = customHeader;
