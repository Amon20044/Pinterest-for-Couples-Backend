import { useState, useEffect } from "react";
import { getAlbums, createAlbum } from "../services/api";
import  Media  from "./Media";

const Albums = ({ token, userId }) => {
    const [albums, setAlbums] = useState([]); 
    const [albumName, setAlbumName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (token && userId) {
            fetchAlbums();
        }
    }, [token, userId]);

    const fetchAlbums = async () => {
        try {
            setLoading(true);
            setError("");
            const res = await getAlbums(token, userId);
            console.log("Fetched albums response:", res.data); 

            if (Array.isArray(res.data)) {
                setAlbums(res.data);
            } else if (res.data && Array.isArray(res.data.albums)) {
                setAlbums(res.data.albums);
            } else {
                console.error("Unexpected API response format:", res.data);
                setAlbums([]); 
            }
        } catch (error) {
            console.error("Error fetching albums:", error);
            setError("Failed to fetch albums.");
            setAlbums([]); 
        } finally {
            setLoading(false);
        }
    };

    const handleCreateAlbum = async () => {
        if (!albumName.trim()) {
            setError("Album name cannot be empty.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            await createAlbum(token, { album_name: albumName }); 
            setAlbumName("");
            fetchAlbums();
        } catch (error) {
            console.error("Error creating album:", error);
            setError("Failed to create album.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Albums</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input 
                type="text"
                placeholder="Album Name" 
                value={albumName} 
                onChange={(e) => setAlbumName(e.target.value)} 
            />
            <button onClick={handleCreateAlbum} disabled={loading}>
                {loading ? "Creating..." : "Create Album"}
            </button>

            {loading ? <p>Loading albums...</p> : (
                <ul>
                    {albums.length > 0 ? (
                        albums.map((album) => <li key={album.id}>
                            {album.album_name}
                            
                            <Media token = {token} albumId={album.id}/>
                            </li>)
                    ) : (
                        <p>No albums found</p>
                    )}
                </ul>

            )}
        </div>
    );
};

export default Albums;
