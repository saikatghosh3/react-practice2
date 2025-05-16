import React, { useEffect, useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12');
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <img src={img.thumbnailUrl} alt={img.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
