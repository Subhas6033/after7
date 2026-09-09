"use client";

import { Button } from "../../components/ui/button";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 min-h-screen text-2xl">
        <h1>About Page </h1>
        <Button variant={"link"} onClick={() => console.log("Buttons Clicked")}>
          Click Here to test the Buttons
        </Button>
      </div>
    </>
  );
};

export default page;
