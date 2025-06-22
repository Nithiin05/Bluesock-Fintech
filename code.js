const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://samarthf28:samarth@cluster0.8zsfaym.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a mongoose schema for user information
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    userId: {
        type: String,
        required: true,
    },
    Data_1: {
        type: Date,
        required: [true, "Date is required"],
    },
    position: {
        type: String,
        required: [true, "Position is required"],
    },
    status: {
        type: String,
        default: 'invalid',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST endpoint for verifying user ID
app.post('/verify', async (req, res) => {
    try {
        const userId = req.body.userInfo?.trim();

        if (!userId) {
            return res.status(400).send({
                success: false,
                message: "User ID is required",
            });
        }

        const user = await User.findOne({ userId });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User details retrieved successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in getting user details",
            error: error.message,
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
