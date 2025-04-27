import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, speed = 100 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed]);

  return (
    <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 animate-fadeIn">
      {`${texts[index].substring(0, subIndex)}|`}
    </h1>
  );
};

export default Typewriter;
