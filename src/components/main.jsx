import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5
  className="card-title fs-1 text fw-lighter"
  style={{ color: "bisque", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
>
  New Season Arrivals
</h5>
              <p className="card-text fs-5 d-none d-sm-block "
              style={{ color: "beige", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                Stay Tuned for the latest trends and styles. Discover our new collection that brings you the best of fashion and comfort. Whether you're looking for casual wear or something more formal, we have it all. Don't miss out on our exclusive offers and limited-time deals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
