import { useState } from "react";
import "./App.css";

function App() {
  return (
    <main>
      <div className="hero">
        <div className="hero-content-side">
          <div className="center-image-container">
            <img
              className="hero-logo"
              src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
            />
            <h1 className="hero-heading">Lorem Ipsum Dolor</h1>
          </div>
          <p className="hero-subtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
            asperiores veritatis aliquid voluptates natus explicabo quod nostrum
            ipsum odio adipisci corrupti, doloremque veniam. Ex nobis cumque
            neque ratione accusamus?
          </p>
          <button className="hero-cta">Join Server</button>
        </div>
        <div className="hero-image-side">
          <img
            className="hero-image-side-bg-img"
            alt="javascript code"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
      <div className="content">
        <div className="profiles-section">
          <h1>Our members</h1>
          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>Babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                nihil laborum ab quae, eligendi doloribus ducimus repudiandae
                porro perspiciatis voluptatibus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur, modi?
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>Babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                praesentium veniam nostrum, voluptatibus porro rerum minima
                veritatis expedita harum at! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur, modi?
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>Babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                assumenda inventore eos eveniet nemo voluptas, accusamus
                recusandae corrupti necessitatibus dignissimos? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tenetur, modi?
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>Babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                assumenda inventore eos eveniet nemo voluptas, accusamus
                recusandae corrupti necessitatibus dignissimos? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tenetur, modi?
              </p>
            </div>
          </div>
        </div>
        <div className="topics">
          <h2>Some of our chats</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nihil.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
