import classes from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.modal}>
        <div className={classes.header}>{props.title}</div>
        <div className={classes.content}>{props.message}</div>
        <div className={classes.footer}>
          <Button onClick={props.onConfirm} className={classes.action}>
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
