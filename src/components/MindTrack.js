import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./About.css"

export default function MindTrack() {
    const [currentImage2, setCurrentImage] = useState(0);
    const [viewerIsOpen2, setViewerIsOpen] = useState(false);

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
            src: "images/dashboard1.png",
            width: 4,
            height: 3
          },
          {
            src: "images/dashboard2.png",
            width: 1,
            height: 1
          },
          {
            src: "images/dashboard3.png",
            width: 5,
            height: 4
          },
          {
            src: "images/dashboard4.png",
            width: 5,
            height: 4
          }
        ];
    
    return (
        <div className="container">
            <h1 className="header4">Travel</h1>
            <p className="text4">Here are a few of my best memories. Click to enlarge the picture.</p>             
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen2 ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage2}
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


