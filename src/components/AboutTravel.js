import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./About.css"
function AboutTravel() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photos=[
          {
            src: "images/travel5.jpeg",
            width: 4,
            height: 3
          },
          {
            src: "images/travel4.jpeg",
            width: 1,
            height: 1
          },
          {
            src: "images/travel7.jpeg",
            width: 5,
            height: 4
          },
          {
            src: "images/travel1.jpeg",
            width: 5,
            height: 4
          },
          {
            src: "images/travel3.jpeg",
            width: 5,
            height: 4
          },
          {
            src: "images/travel2.jpeg",
            width: 6,
            height: 4
          },
          {
            src: "images/travel6.jpeg",
            width: 6,
            height: 4
          },
          
        ];
    
    return (
        <div className="container">
            <h1 className="header4">Travel</h1>
            <p className="text4">Here are a few of my best memories. Click to enlarge the picture.</p>             
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );

}

export default AboutTravel
