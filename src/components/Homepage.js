import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "../tileData";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Filler from "./Filler.js";
const windowHeight = window.innerHeight;
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "20px",
    display: "flex",
    spacing: 8,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  tiles: {
    cursor: "cell",
  },
  spinner: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    padding: windowHeight / 4,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    position: "fixed",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = (index) => {
    handleOpen();
    setActiveModal(index);
  };
  return (
    <div>
      <Filler />
      {tileData ? (
        <GridList spacing={5} className={classes.gridList} cols={3}>
          {tileData.map((tile, index) => (
            <GridListTile
              className={classes.tiles}
              onClick={() => handleModal(index)}
              key={tile.img}
              cols={tile.cols || 1}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}

      <Modal
        aria-labelledby={`transition-modal-title`}
        aria-describedby={`transition-modal-description`}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={tileData[activeModal].img} className="img" alt="" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Homepage;
