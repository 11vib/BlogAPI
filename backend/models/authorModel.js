import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true 
       },
     password: { 
       type: String, 
       required: true 
     }
});

export const AuthorModel = mongoose.model("authors", authorSchema);
// const formSchema = new Schema({
//   question1: String,
//   question2: String,
//   question3: String,
//   question4: String,
//   question5: String
// });

// export default model('Form', formSchema);