const User = require('../model/User'); 

const register = async (req, res) => {
  const { email, username, uid } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, username });
      await user.save();
    } 
    res.status(200).json({ message: 'User stored successfully', user });
  } catch (err) {
    console.error('MongoDB error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

const login = async (req, res) => {
  const { uid } = req.body;

  try {
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.lastVisit = new Date();
    await user.save();
      res.status(200).json({ message: 'User logged in successfully', user });
    } catch (err) {
    console.error('MongoDB error:', err);
    res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
  register,
  login
};
