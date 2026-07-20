import CardGrid from "./card-grid";
import Card from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faCodeBranch,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const ImageIcons = {
  foundationlabs: "/icons/foundationlabs.png",
  cutecraft: "/icons/cutecraft-icon.png",
};

export default function CardHome() {
  return (
    <CardGrid>
      <Card
        icon={<FontAwesomeIcon icon={faGithub} className="w-8 h-8" />}
        title="GitHub Profile"
        image="emojis/cina_walk.gif"
        description="Here you can see my GitHub profile."
        hoverColor="#fd74ac"
        href="https://github.com/milchreisli"
      />

      <Card
        icon={
          <Image
            src={ImageIcons.foundationlabs}
            width={32}
            height={32}
            alt="Foundation Labs"
          />
        }
        title="Foundation Labs"
        image="emojis/classd.png"
        description="This was a German SCP:SL server where I worked as a Chief Policy & Ethics Manager."
        hoverColor="#00ccff"
        route="/foundation-labs"
        archived={true}
      />

      <Card
        icon={
          <Image
            src={ImageIcons.cutecraft}
            width={32}
            height={32}
            alt="CuteCraft"
          />
        }
        title="CuteCraft"
        image="emojis/kuromi_laugh.gif"
        description="CuteCraft is a German Minecraft network where I maintain policys and documents and also work as a 2D designer."
        hoverColor="#fcacc7"
        route="/cutecraft"
        archived={false}
      />

      <Card
        icon={<FontAwesomeIcon icon={faCodeBranch} className="w-8 h-8" />}
        title="S42yt"
        image="emojis/kuromi_blush.gif"
        description="This is the templates owner's profile. You can find the source code on his GitHub."
        hoverColor="#9C1EE9"
        href="https://github.com/S42yt"
      />
    </CardGrid>
  );
}
