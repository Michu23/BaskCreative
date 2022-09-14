import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Img = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (image) => {
    setOpen(false);
  };

  return (
    <div>
      <img
        src={props.image}
        alt=""
        className="img-fluid p-2 cp"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        aria-describedby="alert-dialog-slide-description"
      >
       
        <img src={props.image} alt="" className="h-100"  />
      </Dialog>
    </div>
  );
};

export default Img;
