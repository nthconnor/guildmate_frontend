import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <div className="flex bg-white shadow-sm w-full mt-10">
      <div className="rounded-lg p-2 mx-auto max-w-xl w-full">
        <h2 className="text-2xl text-center mb-4">
          <span className="mx-2">Connect.</span>
          <span className="mx-2">Play.</span>
          <span className="font-bold mx-2">Conquer.</span>
        </h2>
        <p className="text-center mt-2 text-gray-600 mb-10">
          Guildmate is the ultimate platform for gamers seeking new allies and
          thrilling experiences. Connect with like-minded players, join dynamic
          events, and build your dream team to conquer your favorite games
          together.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Button>Login</Button>
          <Button variant="outline">Create Account</Button>
        </div>
      </div>
      <div className="flex justify-center mt-4 w-full">
        <img
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_5400,w_13500/c_fill,w_2050,h_816/q_auto,f_auto/redbullcom/2020/12/10/zubw1a5xpgptgt7steeb/cloud9-white-valorant"
          alt=""
          className="h-60 w-auto"
        />
      </div>
    </div>
  );
}

export default HeroSection;
