import { motion, useMotionValue, useSpring } from "motion/react";
import PlayerDisk from "./components/PlayerDisk";
import { useRef } from "react";
import PlayerBar from "./components/PlayerBar";

interface Props {
  Navigate: (item: string) => void;
}

function RotatingDisk({ Navigate }: Props) {
  const rotation = useMotionValue(0);
  const lastRotation = useRef(0);
  const turn = useSpring(rotation, {
    stiffness: 30,
  });

  return (
    <div className="nav-wrapper">
      <PlayerBar />
      <motion.div className="disk-wrapper">
        <motion.svg
          height="70vw"
          width="70vw"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-svg"
          onPan={(e, pointInfo) => {
            rotation.set(-(lastRotation.current + pointInfo.offset.x * 0.3));
          }}
          style={{ rotate: turn }}
        >
          <PlayerDisk />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default RotatingDisk;
