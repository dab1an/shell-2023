import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

interface aboutCardProps {
  name: string;
  url: string;
  role: string;
  gitUrl: string;
  linkedInUrl: string;
}

const AboutCard = (props: aboutCardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/green.png" alt="" />
      </div>
      <div className="profile-image">
        <img src={props.url} alt="" />
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.role}</p>

        <div className="flex items-center justify-center gap-3">
          <a href={props.gitUrl} target="_blank">
            <BsGithub size={30} className="hover:text-green-500" />
          </a>
          <a href={props.linkedInUrl} target="_blank">
            <BsLinkedin size={28} className="hover:text-green-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
