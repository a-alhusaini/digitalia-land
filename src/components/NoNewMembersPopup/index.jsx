import classes from "./index.module.css";

export default function NoNewMembersPopup({ visible }) {
  if (visible) {
    return (
      <div className={classes.popupBg}>
        <div className={classes.popup}>
          <h1>We are not accepting new members please try again later</h1>
        </div>
      </div>
    );
  }
  return <></>;
}
