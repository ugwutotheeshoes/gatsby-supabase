import React from "react";
import { Image, CloudinaryContext } from "cloudinary-react";
import "../styles/global.css";
import { InView } from "react-intersection-observer";
import { createClient } from "@supabase/supabase-js";

const IndexPage = () => {
  const supabase = createClient(
    "https://fqsvpneuxkgvripbrzdf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxc3ZwbmV1eGtndnJpcGJyemRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDI4ODQsImV4cCI6MTk2Nzg3ODg4NH0.zjYvNm6RRfEFqc2Ei13mKbDKuNJ5V1q6WIaRQgL8STQ"
  );
  const endFunction = async (inView) => {
    if (inView) {
      const { data, error } = await supabase.rpc("increment", { row_id: 1 });
    }
  };

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
        <InView onChange={(inView) => endFunction(inView)}>
          {({ ref }) => (
            <div className="image-container" ref={ref}>
              <Image
                publicId="eatery/item-3.jpg"
                width="300px"
                height="400px"
              />
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
