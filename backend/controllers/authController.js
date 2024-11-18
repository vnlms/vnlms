import bcrypt from 'bcryptjs'; // Use `bcryptjs` for better compatibility
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register Controller
export const register = async (req, res) => {
  const { name, email, password, username } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ msg: 'Username or Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    return res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set token as HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });

    return res.json({
      msg:"Login successful",
      status: 200,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

// Logout Controller
export const logout = (req, res) => {
  try {
    // Clear token cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',
    });

    return res.json({ msg: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout Error:', error);
    return res.status(500).json({ msg: 'Server error' });
  }
};
