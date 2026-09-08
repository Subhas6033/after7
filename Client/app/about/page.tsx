"use client";

import { Button } from "../../components/ui/button";

const page = () => {
  return (
    <>
      <h1>About Page </h1>
      <Button
        variant={"secondary"}
        onClick={() => console.log("Buttons Clicked")}
      >
        Clcik Here to test the Buttons
      </Button>
    </>
  );
};

export default page;
