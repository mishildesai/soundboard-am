import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import SoundItem from "../model/soundItem";
import useSound from "use-sound";

export default function SoundCard(props: { sound: SoundItem }) {
  const [play, { stop }] = useSound(props.sound.soundFile);

  return (
    <Card>
      <CardHeader>{props.sound.name}</CardHeader>
      <CardBody>
        <Button
          onClick={() => {
            play();
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            stop();
          }}
        >
          Stop
        </Button>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
