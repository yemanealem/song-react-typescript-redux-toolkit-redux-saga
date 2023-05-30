import mongoose from "mongoose";
const { Schema } = mongoose;

const SongSchema = new Schema({
  title: {
    type: String,
    required: true,
 
  },
  genere: {
    type: String,
    required: true,
 
  },
  artistName: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: false,
  },
 
},{
  timestamps:true
});

export default mongoose.model("Song", SongSchema)