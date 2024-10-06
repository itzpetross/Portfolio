import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Project = mongoose.models.Project || mongoose.model("Project",projectSchema);
export default Project;