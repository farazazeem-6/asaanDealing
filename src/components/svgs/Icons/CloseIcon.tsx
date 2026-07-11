import Svg, { SvgProps, SvgPath } from '../svgs';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
      css={{ ...props?.css }}
    >
      <SvgPath
        d="M-8.21774e-08 14.3999L1.88 16.2799L8 10.1732L14.12 16.2799L16 14.3999L8 6.3999L-8.21774e-08 14.3999Z"
      />
      <SvgPath
        d="M16 1.88L14.12 -8.21774e-08L8 6.10667L1.88 -6.17205e-07L-8.21774e-08 1.88L8 9.88L16 1.88Z"
        
      />
    </Svg>
  );
};
export default Icon;