const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

// Get all users
module.exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ message: 'Users retrieved successfully', users });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new user
module.exports.setUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, dateOfBirth, description } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !username || !email || !password || !dateOfBirth) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email ou nom d’utilisateur déjà utilisé.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new UserModel({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            dateOfBirth,
            description
        });

        await newUser.save();

        // Remove password for the response
        const userWithoutPassword = newUser.toObject();
        delete userWithoutPassword.password;

        res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error' });
    }   
};

// Update a user by ID
module.exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    let updatedUser;
    const allowedFields = ['firstNmae', 'lastName', 'username', 'email', 'description', 'dateOfBirth'];
    const updateData = {};

    if (!req.body) {
        return res.status(400).json({ message: 'No data provided for update' });  
    }

    // Filter the request body to only include allowed fields
    Object.keys(req.body).forEach(key => {
        if (allowedFields.includes(key)) {
            updateData[key] = req.body[key];
        }
    });

    if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: 'Aucun champ valide à mettre à jour.' });
    }
    try {
            updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        );}catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }   
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
}

// Delete a user by ID
module.exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully'});
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}