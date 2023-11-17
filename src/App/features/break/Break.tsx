import React from "react";
import {
  BreakContainer,
  BreakContentContainer,
  BreakIFrame,
} from "./Break.style";
import { H2 } from "../../App.style";

const Break = () => {
  return (
    <BreakContainer>
      <BreakIFrame
        src="https://player.vimeo.com/video/884921518?h=2169fb7539&autoplay=1&loop-1&muted=1&background=1"
        frameBorder=""
        allow="autoplay; fullscreen"
        allowFullScreen
      ></BreakIFrame>
      <BreakContentContainer>
        <H2>Dla nas pixel to nie tylko pixel.</H2>
        <H2>To kropla wody tworząca ocean Twojego biznesu.</H2>
      </BreakContentContainer>
    </BreakContainer>
  );
};

export default Break;
