import express from 'express';
import Users from '../models/userSchema';

const router = express.Router();

router.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  try {
    const curr_user = await User.findOne({ userId });
    if (!curr_user) {
      return res.status(404).json({ message: "User does not exist" });
      console.log("not found");
    }

    // Add password validation logic here, e.g., using bcrypt for hashing comparison
    if (curr_user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
      console.log("not found");
    }
    console.log("not found");
    res.status(200).json({ message: "User found", user: curr_user });
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: "Server error" });
  }
});

export { router as UserRouter };
