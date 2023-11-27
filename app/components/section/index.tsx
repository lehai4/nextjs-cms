import { CSSProperties } from "react";

const Section = ({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  className: string;
}) => {
  return (
    <section style={style} className={className}>
      {children}
    </section>
  );
};

export default Section;
