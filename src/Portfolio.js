import React, { useDebugValue, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "20px",
    spacing: 8,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  spinner: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    padding: windowHeight / 4,
  },
  header: {
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
    color: "#808080",
    borderBottomWidth: "10px",
    borderBottom: "10px",
    marginBottom: "20px",
  },
}));

const Portolio = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(0);
  const [foodTiles, setFoodTiles] = useState([]);
  const [portraitTiles, setPortraitTiles] = useState([]);
  const [landscapeTiles, setLandscapeTiles] = useState([]);

  useEffect(() => {
    addFood();
    addPortrait();
    addLandscape();
  }, []);

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

  const addFood = () => {
    let tiles = [];
    tileData
      .filter((tile) => tile.type === "food")
      .map((tile) =>
        tiles.push({ img: tile.img, cols: tile.cols, type: tile.type })
      );
    setFoodTiles(tiles);
  };

  const addPortrait = () => {
    let tiles = [];
    tileData
      .filter((tile) => tile.type === "portrait")
      .map((tile) =>
        tiles.push({ img: tile.img, cols: tile.cols, type: tile.type })
      );
    setPortraitTiles(tiles);
  };

  const addLandscape = () => {
    let tiles = [];
    tileData
      .filter((tile) => tile.type === "landscape")
      .map((tile) =>
        tiles.push({ img: tile.img, cols: tile.cols, type: tile.type })
      );
    setLandscapeTiles(tiles);
  };

  function isDataEmpty() {
    if (
      foodTiles.length > 0 &&
      landscapeTiles.length > 0 &&
      portraitTiles.length > 0
    ) {
      return true;
    }
    return false;
  }

  function createGridByCategory(catergoryTiles) {
    return (
      <GridList spacing={5} className={classes.gridList} cols={3}>
        {catergoryTiles.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img src={tile.img} alt={index} />
          </GridListTile>
        ))}
      </GridList>
    );
  }

  return (
    <div>
      {isDataEmpty() ? (
        <div className={classes.grid}>
          <h1 className={classes.header}>Food:</h1>
          {createGridByCategory(foodTiles)}
          <h1 className={classes.header}>Landscape:</h1>
          {createGridByCategory(landscapeTiles)}
          <h1 className={classes.header}>Portrait:</h1>
          {createGridByCategory(portraitTiles)}

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
                <img
                  src={portraitTiles[activeModal].img}
                  className={classes.img}
                  alt=""
                />
              </div>
            </Fade>
          </Modal>
        </div>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Portolio;
