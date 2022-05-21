const Videos = require("./VideosModels");

const GetVideos = async (req, res) => 
{
    try 
    {
        if (Object.keys(req.query).length > 0) 
        {
            const { autor, fechaexacta } = req.query;
            if (autor) 
            {
                const Video = await Videos.find({ autor, activo: true });
                return res.status(200).json(Video);
            }

            if (fechaexacta) 
            {
                let Video = await Videos.find({ fechaexacta, activo: true });
                if (Video.length === 0) {
                    Video = await Videos.find({ fechaexacta: { $gt: fechaexacta }, activo: true });
                }
                return res.status(200).json(Video);
            }

            if (desde && hasta) 
            {
                const Video = await Videos.find({ fechaexacta: { $gt: desde, $lt: hasta }, activo: true });
                return res.status(200).json(Video);
            }
        }

        const Video = await Videos.find({ activo: true });
        return res.json(Video);
    } catch (err) 
    {
        return res.status(500).send("Server error");
    }
}

const GetVideos2 = async (req, res) => 
{
    try {
        const { id } = req.params;

        const Video = await Videos.findById(id);
        return res.status(200).json(Video);
    } catch (err) 
    {
        return res.status(500).send("Server Error");
    }
}

const PostVideos = async (req, res) => 
{
    try 
    {
        const { titulo, descripcion, duracion, autor, enlacevideo, fechaexacta } = req.body;
        //fechaexacta=ISODate;
        //fechaexacta=$CurrentDate;
        const newvideo = new Videos({ titulo, descripcion, duracion, autor, enlacevideo, fechaexacta });
        await newvideo.save();

        res.status(201).json(newvideo);
    } catch (err) 
    {
        return res.status(500).send("Post on server Error");
    }
}

const DeleteVideos = async (req, res) => 
{
    try 
    {
        const { id } = req.params;

        const Video = await Videos.findByIdAndUpdate(id, { activo: false }, { new: true });
        return res.status(200).json(Video);
    } catch (err) 
    {
        return res.status(500).send("Delete on server Error");
    }
}

module.exports = 
{
    GetVideos, GetVideos2, PostVideos, DeleteVideos
}