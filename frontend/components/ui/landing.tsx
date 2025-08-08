import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const Landing = () => {
  const [scope, animate] = useAnimate();
  const h1Text = "Chat0";
  const h2Text = "Blazingly-fast, free, open source AI chat app.";
  const spanText =
    "Click on the Settings button to add your API keys and start chatting!";

  const startAnimateH1 = async () => {
    await animate(
      "h1",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        delay: stagger(0.03),
      }
    );
  };

  const startAnimateH2 = async () => {
    await animate(
      "h2",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.03),
      }
    );
  };

  const startAnimateSpan = async () => {
    await animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(0.03),
      }
    );
  };
  const starteAnimateSvg = async () => {
    await animate(
      "svg",
      {
        opacity: 1,
        y: 0,
      },
      {
        delay: 0.2,
      }
    );
  };
  const starteAnimatePathLine = async () => {
    await animate(
      "path",
      {
        pathLength: 1,
      },
      {
        delay: 0.08,
        duration: 0.8,
        ease: "easeInOut",
      }
    );
  };

  useEffect(() => {
    startAnimateH1();
    startAnimateH2();
    startAnimateSpan();
    starteAnimateSvg();
    starteAnimatePathLine();
  });

  return (
    <div ref={scope} className="flex flex-col items-center gap-1 text-center">
      <div className="flex items-center max-w-sm md:max-w-3xl text-5xl md:text-8xl font-semibold mb-1 lg:mb-2">
        {h1Text.split("").map((word, index) => {
          return (
            <motion.h1
              style={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              key={word + index}
              className="inline-block"
            >
              {word}
            </motion.h1>
          );
        })}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-20"
          initial={{
            opacity: 0,
            y: 10,
          }}
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M12 18V5"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M17.997 5.125a4 4 0 0 1 2.526 5.77"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M18 18a4 4 0 0 0 2-7.464"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M6 18a4 4 0 0 1-2-7.464"
          />
          <motion.path
            initial={{
              pathLength: 0,
            }}
            d="M6.003 5.125a4 4 0 0 0-2.526 5.77"
          />
        </motion.svg>
      </div>
      <div className="max-w-sm md:max-w-3xl">
        {h2Text.split(" ").map((word, index) => {
          return (
            <motion.h2
              style={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              key={word + index}
              className="inline-block text-sm md:text-xl text-foreground"
            >
              {word}&nbsp;
            </motion.h2>
          );
        })}
      </div>
      <div className="max-w-sm md:max-w-3xl">
        {spanText.split(" ").map((word, index) => {
          return (
            <motion.span
              style={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              key={word + index}
              className={cn(
                "text-xs md:text-lg font-light text-foreground inline-block"
              )}
            >
              {word === "Settings" ? (
                <code className="font-normal">{word}</code>
              ) : (
                word
              )}
              &nbsp;
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
