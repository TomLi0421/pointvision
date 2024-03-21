import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function CustomCarousel(props: any) {
  return (
    <Carousel NextIcon={<ArrowForwardIos />} PrevIcon={<ArrowBackIos />}>
      {props.images.map((image: any, index: number) => (
        <Paper
          key={index}
          className="min-h-72 flex items-center h-full"
          elevation={0}
        >
          <img
            src={`https://d2j3uzrexrokpc.cloudfront.net/${props.type}/${image}`}
            alt={props.name}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
