import React, { useState } from "react";
import { Image, CloudinaryContext } from "cloudinary-react";
import "../styles/global.css";
import { InView } from "react-intersection-observer";
import { supabase } from "./supabase";
// import { from } from "@supabase/supabase-js";

function ImpressionCounter(inView, count, setCount) {
  if (inView) {
    setCount(count + 1);
    console.log(count);
    endFunction();
  }
}

const endFunction = async () => {
  // const { data, error } = await supabase.rpc("increment", { row_id: 1 });
  // console.log('yeahhhhh')
  const { data, error } = await supabase
    .from("pages")
    .update({ name: "Mordor" })
    .eq("name", "Image impression");
};

// markup
const IndexPage = () => {
  const [count, setCount] = useState(1);

  return (
    <main className="container">
      <title>Track Image impressions in Gatsby.js with Supabase</title>

      <h1>tracking image impressions in gatsby.js with supabase</h1>

      {Array.from(Array(5).keys()).map((i) => (
        <p key={i}>
          Irure pariatur velit est anim ipsum anim aliquip officia velit
          consectetur. Duis sint ut consectetur ea anim. Sit proident culpa
          velit officia do incididunt Lorem in deserunt non adipisicing occaecat
          magna. Occaecat occaecat esse excepteur consequat occaecat cupidatat
          aliquip labore esse ad ea. Laboris id excepteur nisi voluptate sunt
          anim commodo amet reprehenderit.
        </p>
      ))}

      <CloudinaryContext cloud_name="ugwutotheeshoes">
        <InView
          threshold={0.6}
          onChange={(inView) => ImpressionCounter(inView, count, setCount)}
        >
          {({ ref }) => (
            <div className="image-container" ref={ref}>
              <Image
                publicId="eatery/item-3.jpg"
                width="300px"
                height="400px"
              />
              {/* <p
                className={`text-white text-2xl font-bold ${
                  inView ? "color: green" : "color : red"
                }`}
              >{`Image in view? ${inView} `}</p> */}
              {/* <h2>{`Header inside viewport ${inView}.`}</h2> */}
            </div>
          )}
        </InView>
      </CloudinaryContext>

      {Array.from(Array(8).keys()).map((i) => (
        <p key={i}>
          Irure pariatur velit est anim ipsum anim aliquip officia velit
          consectetur. Duis sint ut consectetur ea anim. Sit proident culpa
          velit officia do incididunt Lorem in deserunt non adipisicing occaecat
          magna. Occaecat occaecat esse excepteur consequat occaecat cupidatat
          aliquip labore esse ad ea. Laboris id excepteur nisi voluptate sunt
          anim commodo amet reprehenderit.
        </p>
      ))}
    </main>
  );
};

export default IndexPage;
