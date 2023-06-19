import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./style.scss";
import CircularSlider from "@fseehawer/react-circular-slider";
import { Link } from "react-router-dom";
import bgImage from "../../assets/bg-image.jpeg";

const CircleSlider = () => {
  const [value, setValue] = useState(5);

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <div className="container">
      <div>
        <div className="circle-dash">
          <div className="circle">
            <div
              className="circle-bar"
              style={{
                strokeDasharray: `${(value / 10) * 565}px`,
                backgroundImage: `url(${bgImage})`,
              }}
            ></div>
            <div className="circle-value">{value}</div>
          </div>
        </div>

        <div className="circular-slider-container">
          <CircularSlider
            label="savings"
            progressColorFrom="#fff"
            progressColorTo="#fff"
            progressSize={5}
            trackColor="#3f8390"
            trackSize={5}
            initialValue={value}
            dataIndex={value}
            min={0}
            max={10}
            hideKnob={true}
            knobDraggable={false}
            hideLabelValue={true}
            onChange={(value: any) => {
              console.log(value);
            }}
            width={250}
          />
        </div>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          data-testid="horizontal-slider"
          min={0}
          max={10}
          value={value}
          onChange={(value, index) => handleChange(value)}
          renderThumb={(props, state) => <div {...props}></div>}
        />
      </div>
      <Link to="/pyramid-scale" className="link">
        Pyramid Scale
      </Link>
    </div>
  );
};

export default CircleSlider;
