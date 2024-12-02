import ImagePlacer from "@/components/users-components/ImagePlacer";
import { SizeDropDown } from "@/components/users-components/SizeDropDown";
import React, { Suspense, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Shirt from "@/components/canvas/Shirt";
import CanvasModel from "@/components/canvas";
import { SketchPicker } from "react-color";
import SecondDesignModal from "@/components/users-components/SecondDesignModal";
import NavbarNew  from "@/components/NavbarNew";

function Design() {
  const location = useLocation();
  const image = location.state.logo;
  const [secondDesignUrl, setSecondDesignUrl] = useState(null);
  const navigate = useNavigate();
  const [modifiedImage, setModifiedImage] = useState(null);
  const [imageData, setImageData] = useState(null);

  const [secondModifiedImage, setSecondModifiedImage] = useState(null);
  const [secondImageData, setSecondImageData] = useState(null);

  const getImageUrl = (data, objectData) => {
    setModifiedImage(data);
    setImageData(objectData);
  };

  const getSecondDesign = (url) => {
    console.log(url);
    setSecondDesignUrl(url);
  };
  const [clr, setColor] = useState("white");

  const secondDesignHandler = (data, objectData) => {
    setSecondModifiedImage(data);
    setSecondImageData(objectData);
  };

  return (
    <div className="flex-col flex ">
      <NavbarNew/>
      <div className="flex flex-col md:flex-row">
        <div>
          <div>
            <p className="text-xl font-extrabold my-2">Live Preview</p>
          </div>
          <div className="flex gap-1">
            <div>
              <ImagePlacer logo={image} getImageUrl={getImageUrl} />
            </div>
            {secondDesignUrl && (
              <div>
                <ImagePlacer
                  logo={secondDesignUrl}
                  getImageUrl={secondDesignHandler}
                />
              </div>
            )}
          </div>
        </div>

        <div className="h-[276px]">
          <Suspense fallback={<div>Loading</div>}>
            <CanvasModel
              imageUrl={modifiedImage}
              imageData={imageData}
              secondImageUrl={secondModifiedImage}
              secondImageData={secondImageData}
              color={clr}
            />
          </Suspense>
        </div>
      </div>

      <div className="my-8 mx-4 flex gap-4 flex-col md:flex-row">
        <div>
          <SketchPicker
            onChange={(color) => {
              setColor(color.hex);
            }}
            disableAlpha
            presetColors={["#ffffff", "#000000"]}
            color={clr}
          />
        </div>
        <div>
          <div>
            {secondDesignUrl ? (
              <Button
                onClick={() => {
                  setSecondDesignUrl(null);
                }}
              >
                Remove Second Design
              </Button>
            ) : (
              <SecondDesignModal getSecondDesign={getSecondDesign} />
            )}
          </div>
          <div>
            <p className="my-1 font-semibold">Size</p>
            <SizeDropDown />
          </div>
          <div className="my-4">
            <p className="my-1 font-semibold">Quantity</p>
            <Input type="number" placeholder="1" min={1} />
          </div>

          <div>
            <Button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
