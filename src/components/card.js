import React from "react";
const imageSize = {
  height: 100,
  width: 100,
  margin: 10
};

const Card = props => {
  return (
    <div className="container">
      <div className="col sm12">
        {props.images.images.map((image, index) => {
          let randomNum = Math.floor(Math.random() * 10);
          if (index > randomNum) {
            return (
              <img
                key={index}
                src={image.src}
                alt=""
                style={imageSize}
                onClick={props.handleClick}
                value={image.id}
              />
            );
          } else if (index < randomNum) {
            return (
              <img
                key={index}
                src={image.src}
                alt=""
                style={imageSize}
                onClick={props.handleClick}
                value={image.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
