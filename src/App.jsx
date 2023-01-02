import "./App.css";
import NoNewMembersPopup from "./components/NoNewMembersPopup";

export default function App() {
  return (
    <main className="gradient-bg">
      <NoNewMembersPopup visible={true} />
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
          <div className="profiles-left-side">
            <h1>Our Members</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nam sit, iure vitae modi molestiae, minima quas adipisci nemo
              explicabo accusantium nulla at rem harum veniam dolores beatae
              dolorem exercitationem illum illo nihil dignissimos commodi
              reprehenderit quidem. Recusandae expedita suscipit ducimus
              corrupti, odit, odio excepturi optio, voluptatibus fugit deleniti
              beatae.
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
                <h3>Babashka</h3>
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
                <h3>Babashka</h3>
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
                <h3>Babashka</h3>
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
                <h3>Babashka</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                assumenda inventore eos eveniet nemo voluptas, accusamus
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
