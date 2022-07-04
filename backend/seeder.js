import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from "./config/db.js";

// seederjs is no way connecting to the serverjs, so we need to call below again
dotenv.config();
connectDB();

const importData = async () => {
    try {
        // delete before import
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        const createdUsers = await User.insertMany(users);
        const adminId = createdUsers[0]._id;
        const sampleProducts = products.map(product=> {
            return {... product, user: adminId}
        })
        await Product.insertMany(sampleProducts);
        console.log("Data Imported!".green.inverse);

        // terminate nodejs, ctrl + C
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        // terminate program with error
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

//option1: how to run the script selectively, use argv!!!
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}

// then, add script in package json