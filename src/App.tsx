import { Box, Container, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
import SoundBoard from "./model/soundBoard";
import SoundCard from "./components/SoundCard";

const SOUND_BOARDS: Array<SoundBoard> = [
  {
    name: "Deep Rock Galactic",
    soundItems: [
      {
        name: "Glyphid Grunt Scream",
        soundFile: "/sounds/drg/Glyphid_Grunt_GeneralScreamA_1.ogg",
      },
      {
        name: "Glyphid Bulk Detonator Idle",
        soundFile: "/sounds/drg/Glyphid_Bulk_Detonator_IdleLoopA_1.ogg",
      },
      {
        name: "Glyphid Exploder Scream",
        soundFile: "/sounds/drg/Glyphid_Exploder_ScreamScreamA_2.ogg",
      },
    ],
  },
  {
    name: "Team Fortress 2",
    soundItems: [
      {
        name: "Demoman dominates Engineer",
        soundFile: "/sounds/tf2/demoman/dominationengineer05.mp3",
      },
      {
        name: "Engineer dominates Engineer",
        soundFile: "/sounds/tf2/engineer/dominationengineer01.mp3",
      },
      {
        name: "Engineer - Nope",
        soundFile: "/sounds/tf2/engineer/no01.mp3",
      },
    ],
  },
];

function App() {
  const [soundBoardIndex, setSoundBoardIndex] = useState(-1);

  return (
    <Container>
      <Stack direction={"row"}>
        <Select
          placeholder="Select soundboard"
          onChange={(event) => setSoundBoardIndex(Number(event.target.value))}
        >
          {SOUND_BOARDS.map((value, index) => {
            return (
              <option key={index} value={index}>
                {value.name}
              </option>
            );
          })}
        </Select>
      </Stack>
      <Box>
        {soundBoardIndex > -1 && (
          <>
            {SOUND_BOARDS[soundBoardIndex].soundItems.map((value) => {
              return <SoundCard key={value.name} sound={value}></SoundCard>;
            })}
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
