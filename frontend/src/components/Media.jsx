import { useState, useEffect } from "react";
import { getAlbumMedia, uploadMedia } from "../services/api";

const Media = ({ token, albumId }) => {
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);

    console.log("Media component loaded - Token:", token, "Album ID:", albumId);

    useEffect(() => {
        if (token && albumId) {
            console.log("Fetching media for Album ID:", albumId);
            fetchMedia();
        }
    }, [token, albumId]); // ✅ Fix 2: Add dependencies

    useEffect(() => {
        window.mediaData = media;  
        console.log("📂 Media stored globally: window.mediaData", media);
    }, [media]); // ✅ Logs updated media to console

    const fetchMedia = async () => {
        try {
            console.log("🔄 Fetching media...");
            setLoading(true);
            setError("");

            const res = await getAlbumMedia(token, albumId);
            console.log("✅ Media fetched successfully:", res.data);

            setMedia(Array.isArray(res.data.media) ? res.data.media : []); // ✅ Fix 3
        } catch (error) {
            console.error("❌ Error fetching media:", error);
            setError("Failed to fetch media.");
        } finally {
            console.log("✅ Media fetch completed.");
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Media Gallery</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {loading ? (
                <p>Loading media...</p>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}>
                    {media.length > 0 ? (
                        media.map((item) => ( // ✅ Fix 1
                            <div key={item.id}>
                                {item.media_type === "image" ? (
                                    <img 
                                        src={item.media_url} 
                                        alt="Media" 
                                        width="150" 
                                        height="150"
                                    />
                                ) : (
                                    <video width="150" height="150" controls>
                                        <source src={item.media_url} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No media found</p>
                    )}
                </div>
        )}
        </div>
    );
};

export default Media;
