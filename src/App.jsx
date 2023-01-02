import "./App.css";
import NoNewMembersPopup from "./components/NoNewMembersPopup";
import { useState } from "react";

export default function App() {
  let [popup, setPopup] = useState(false);

  return (
    <main className="gradient-bg">
      <NoNewMembersPopup visible={popup} />
      <div className="hero">
        <div className="hero-content-side">
          <div className="center-image-container">
            <img
              className="hero-logo"
              src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
            />
            <h1 className="hero-heading">Welcome to Digitalia Land!</h1>
          </div>
          <p className="hero-subtext">
            Digitalia Land is a Discord community where you get to talk about
            all things programming. Most of us are avid programmers in
            JavaScript, Elixir, Rust, C and a bunch of other languages. If it
            has something to do with programming, we want to talk with you about
            it!
          </p>
          <button onClick={() => setPopup(true)} className="hero-cta">
            lets chat
          </button>
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
          <div className="profiles-left-side">
            <h1>Technobilia</h1>
            <p>
              Everyone knows about html data attributes but apprently. Some
              people know more tricks than others...
            </p>
            <img
              className="sample-chat-img"
              src="https://media.discordapp.net/attachments/1015658588158562355/1058784629072592979/image.png"
            />
          </div>
          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                nihil laborum ab quae, eligendi doloribus ducimus repudiandae
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                praesentium veniam nostrum, voluptatibus porro rerum minima
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                assumenda inventore eos eveniet nemo voluptas, accusamus
              </p>
            </div>
            <div className="profile-card">
              <div className="profile-card-header">
                <img
                  className="profile-img"
                  src="https://avatars.githubusercontent.com/u/64927540?s=200&v=4"
                />
                <h3>babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium fugiat rem tempore magni dolorem repellendus
                deserunt ullam minus ipsam voluptatem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
