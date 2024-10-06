import {model,models,Schema} from "mongoose";

const ProjectSchema = new Schema({
    Name:String,
    Description:String,
    ImageUrl:String,
    Link:String,
    Date:String
});

//export default model("ProjectSchema",ProjectSchema);
export default models.Project || model("Project", ProjectSchema);