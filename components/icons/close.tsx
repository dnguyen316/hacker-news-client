import { SVGProps } from "react";

const CloseIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M10.0005 9.0184L13.4378 5.58105L14.4199 6.56314L10.9826 10.0005L14.4199 13.4378L13.4378 14.4199L10.0005 10.9826L6.56314 14.4199L5.58105 13.4378L9.0184 10.0005L5.58105 6.56314L6.56314 5.58105L10.0005 9.0184Z"
        fill="#525252"
      />
    </svg>
  );
};

export default CloseIcon;
