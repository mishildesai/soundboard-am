import { Box, Container, Select, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import SoundBoard from "./model/soundBoard";

const SOUND_BOARDS: Array<SoundBoard> = [
  {
    name: "Deep Rock Galactic",
    soundItems: [],
  },
  {
    name: "Team Fortress 2",
    soundItems: [],
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
          <Text>{SOUND_BOARDS[soundBoardIndex].name}</Text>
        )}
      </Box>
    </Container>
  );
}

export default App;
