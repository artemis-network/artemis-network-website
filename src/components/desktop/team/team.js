import { teamData } from "../../../data/teamData";
import Row from "./row";

const teamComponent = () => {
  const teamOne = [teamData[0], teamData[1], teamData[2]];
  const teamTwo = [teamData[3], teamData[4], teamData[5]];

  return (
    <div>
      <Row teamData={teamOne}></Row>
      <Row teamData={teamTwo}></Row>
    </div>
  );
};

export default teamComponent;
