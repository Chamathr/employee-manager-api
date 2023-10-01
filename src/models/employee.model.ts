import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
)

const Employee = mongoose.model('employees', EmployeeSchema);
export { Employee };