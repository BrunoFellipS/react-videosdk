module.exports = app => {
    app.get('/api/token', (req, res) => {
        res.json({ token: process.env.VIDEOSDK_KEY });
    });

    app.post('/api/rooms', async (req, res) => {
      const room = await fetch(`https://api.videosdk.live/v2/rooms`, {
        method: "POST",
        headers: {
          authorization: process.env.VIDEOSDK_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const { roomId } = await room.json();
      res.json({ roomId });
    });
  }