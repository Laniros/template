import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import tileData from "../tileData";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@material-ui/core";

const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
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
  tiles: {
    cursor: "cell",
  },
  img: {
    maxHeight: windowHeight / 1.2,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    cursor: "pointer",
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
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2, 4, 3),
  },
  carousel: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    cursor: "cell",
  },
}));

const Portolio = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [foodTiles, setFoodTiles] = useState([]);
  const [portraitTiles, setPortraitTiles] = useState([]);
  const [landscapeTiles, setLandscapeTiles] = useState([]);
  const [source, setSource] = useState("");

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

  const handleModal = (src) => {
    handleOpen();
    setSource(src);
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

  function createCarouselByCatergory(catergoryTiles) {
    return (
      <Carousel
        className={classes.carousel}
        indicators={false}
        interval={10000}
      >
        {catergoryTiles.map((tile, index) => (
          <img
            key={index}
            src={tile.img}
            alt={index}
            className="img"
            onClick={(e) => handleModal(e.target.currentSrc)}
          />
        ))}
      </Carousel>
    );
  }

  return (
    <div>
      {isDataEmpty() ? (
        <div>
          <Typography
            variant={window.innerWidth > 768 ? "h3" : "h5"}
            className={classes.header}
          >
            Food:
          </Typography>
          {createCarouselByCatergory(foodTiles)}
          <Typography
            variant={window.innerWidth > 768 ? "h3" : "h5"}
            className={classes.header}
          >
            Landscapes:
          </Typography>
          {createCarouselByCatergory(landscapeTiles)}
          <Typography
            variant={window.innerWidth > 768 ? "h3" : "h5"}
            className={classes.header}
          >
            Portrait:
          </Typography>
          {createCarouselByCatergory(portraitTiles)}
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
              <div className="paper">
                <img src={source} className={classes.img} alt="" />
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
