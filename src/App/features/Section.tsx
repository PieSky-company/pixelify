//components/Section.tsx
import React, { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;

interface SectionProps {
  id: string;
  children?: React.ReactNode; // to include children
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }, ref) => {
    return (
      <Wrapper id={id} ref={ref}>
        {children}
      </Wrapper>
    );
  }
);

export default Section;
