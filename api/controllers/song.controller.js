import Song from "../models/song.model.js";
export const addSong = async (req, res,next) => {

  
    const song = new Song({
        title: req.body.title,
        artistName: req.body.artistName,
        album: req.body.album,
        genere: req.body.genere,

      });
    
      try {
        const newSong = await song.save();
        res.status(201).json(newSong);
      } catch (err) {
        res.status(400).json({ message: err.message });
      } 


}
// 


export const getSong=async(req,res)=> 
   
     {
   
       try {
       let song= await Song.findById(req.params._id);
        res.status(200).send(song);
      } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message });
      }
    

     }

    //  
export const updateSong=async(req,res)=>
  {
    try {
      const id = req.params._id;
      const data = req.body;
      const options = { new: true };
      const result = await Song.findByIdAndUpdate(id, data, options);
      res.status(200).json(result);
  
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    } 

  }

// 
export const deleteSong = async (req, res) => {
 
 
  try {
    await Song.findByIdAndDelete(req.params._id);
    res.status(200).send("Song deleted successfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

export const getSongs = async (req, res) => {
  
    try {
     
      const songs = await Song.find();
      res.status(201).json(songs);
    } catch (err) {
      res.status(400).json({ message: err.message });
    } 


}
// 
export const getStatics = async (req, res) => {
    const type=req.body.type
    const param=req.body.value
    let filter = {};
    var count=0
  try {

   

      if(type==='AN')
       {
        // db.orders.find( { ord_dt: { $gt: new Date('01/01/2012') } } ).count()
        // db.collection.distinct()

        filter['artistName'] = param|| { $exists: true };
       const songs= await Song.find(filter).count();
       const album= await Song.find(filter).distinct('album');
        return res.status(201).json({totalSong:songs,totalAlbum:album.length});

        
     }


     if(type==='ALL')
     {
 // db.orders.find( { ord_dt: { $gt: new Date('01/01/2012') } } ).count()
 // db.collection.distinct()

          filter['artistName'] = param|| { $exists: true };
          let totalSong= await Song.find().count();
          let totalArtist= await Song.find().distinct("artistName")
          let totalAlbum= await Song.find().distinct('album')
          let totalGenere= await Song.find().distinct("genere")
          return res.status(201).json({totalSong:totalSong,totalArtist:totalArtist.length,totalAlbum:totalAlbum.length,totalGenere:totalGenere.length});
      }






       if(type==='GE')
          {
            filter['genere'] = param|| { $exists: true };
            const songs= await Song.find(filter).count();
            // const album= await Song.find(filter).distinct('genere');
             return res.status(201).json({totalSong:songs});
          }   
       if(type==='AL')
           {

            filter['album'] = param|| { $exists: true };
            const songs= await Song.find(filter).count();
            // const album= await Song.find(filter).distinct('album');
             return res.status(201).json({totalSong:songs});

           }
    
  } catch (err) {
    console.log('err',err)
    res.status(400).json({ message: err.message });

  } 

  res.status(201).json(count);

}










