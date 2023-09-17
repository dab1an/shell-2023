import React from "react";
import AboutCard from "../_components/AboutCard";

const page = () => {
  return (
    <div className="flex justify-center p-5 bg-neutral-200 h-screen">
      <div className="w-[70%] flex p-4 flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-md pt-2 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            beatae consectetur quisquam harum? Nam consequatur suscipit ea id
            commodi hic?
          </p>
        </div>
        <h1 className="text-2xl font-bold">Meet our team!</h1>
        <div className="flex gap-2">
          <AboutCard
            name="Dabian Garnica"
            role="Backend"
            url="https://avatars.githubusercontent.com/u/123199365?v=4"
            gitUrl="https://github.com/dab1an"
            linkedInUrl="https://www.linkedin.com/in/dabian-garnica-6509a7275/"
          />
          <AboutCard
            name="Alejandro Vera"
            role="Frontend"
            url="https://avatars.githubusercontent.com/u/91917536?v=4"
            gitUrl="https://github.com/AlejandroV01"
            linkedInUrl="https://www.linkedin.com/in/alejandrovera09/"
          />
          <AboutCard
            name="Miguel Garcia"
            role="Frontend"
            url="https://media.licdn.com/dms/image/C4E03AQHqNZidcGnN4g/profile-displayphoto-shrink_400_400/0/1663385134876?e=1700697600&v=beta&t=U6uBtK5UB5haZDwEdI0ETVMbaYmdNWCSxeI8RdW3Mf4"
            gitUrl="https://github.com/MiguelGarcia2002"
            linkedInUrl="https://www.linkedin.com/in/miguel-garcia2002/"
          />
          <AboutCard
            name="Daniel Jonas"
            role="Frontend"
            url="https://media.licdn.com/dms/image/D4E35AQE5R60v-A3zow/profile-framedphoto-shrink_400_400/0/1660457006260?e=1695546000&v=beta&t=Unlq2BhIoBJbmLSfiO4IbTxcYG-MtmL43C4o6508hKk"
            gitUrl="https://github.com/02danieljonas"
            linkedInUrl="https://www.linkedin.com/in/02danieljonas/"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
