import React from "react";
import { Separator } from "./ui/separator";

function Features() {
  return (
    <div className="flex bg-white shadow-md w-full mt-5">
      <div className="rounded-lg p-4 mx-auto max-w-xl w-full">
        <h2 className="text-2xl text-center font-bold mb-2">
          SHAPE YOUR LEGACY
        </h2>
        <p className="text-center mt-2 text-gray-600 mb-5">
          Discover new friends, join exciting events, and build your ultimate
          gaming squad with Guildmate. Our features are designed to enhance your
          gaming experience and connect you with players who share your passion.
        </p>
        <Separator />
        <div className="mt-5 mb-7 flex justify-between w-full p-1">
          <div className="flex-1 text-center mx-5">
            <h3 className="font-bold mb-2">EXPLORE</h3>
            <div className="flex justify-center mb-2">
              <img
                src="/compass.svg"
                className="h-5 w-auto"
                alt="Compass Icon"
              />
            </div>
            <p className="text-sm">
              Easily find and join guilds based on game genre, skill level, and
              playstyle. It's dangerous to go alone.
            </p>
          </div>
          <div className="flex-1 text-center mx-5">
            <h3 className="font-bold mb-2">CREATE</h3>
            <div className="flex justify-center mb-2">
              <img
                src="/hammer.svg"
                className="h-5 w-auto"
                alt="Compass Icon"
              />
            </div>
            <p className="text-sm">
              Design your guild from the ground up with a customizable name,
              emblem, and description that match your vision.
            </p>
          </div>
          <div className="flex-1 text-center mx-5">
            <h3 className="font-bold mb-2">PLAY</h3>
            <div className="flex justify-center mb-2">
              <img
                src="/controller.svg"
                className="h-5 w-auto"
                alt="Compass Icon"
              />
            </div>
            <p className="text-sm">
              Find and join community events, tournaments, and game nights
              aligned with your interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
