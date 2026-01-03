import Svg, { SvgPath, SvgProps } from '../svgs';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      css={{ ...props?.css }}
    >
      <SvgPath d="M4 12h16" />
      <SvgPath d="M4 18h16" />
      <SvgPath d="M4 6h16" />
    </Svg>
  );
};

export default Icon;
