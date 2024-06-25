module.exports = app => {
    app.get('/api/token', (req, res) => {
        res.json({ token: process.env.VIDEOSDK_KEY });
    });
  }