import { useEffect, useState } from "react";
import axios from "axios";

export default function UserImages({ userId }: { userId: string }) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`/images/${userId}`).then((res) => setImages(res.data));
  }, [userId]);

  return (
    <div>
      {images.map((img, index) => (
        <img key={index} src={img} alt="User Image" className="w-32 h-32" />
      ))}
    </div>
  );
}
