import { motion, useScroll, useSpring } from "motion/react";
import PlayerDisk from "./components/playerdisk";

interface Props {
  Navigate: (item: string) => void;
}

function RotatingDisk({ Navigate }: Props) {
  const { scrollY } = useScroll();
  const turn = useSpring(scrollY, {
    stiffness: 20,
  });
  let diskRad = window.innerWidth;

  return (
    <div className="nav-wrapper">
      <motion.div className="disk-wrapper">
        <motion.svg
          height="70vw"
          width="70vw"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-svg"
          style={{ rotate: turn }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stop-color="yellow" />
              <stop offset="100%" stop-color="red" />
            </linearGradient>
          </defs>
          <PlayerDisk />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default RotatingDisk;
