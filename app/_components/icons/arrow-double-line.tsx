import { SVGProps } from "react";

const ArrowDoubleLineIcon = ({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) => {
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
        d="M10.0001 4.03003L4.82745 9.20258L6.00596 10.3812L10.0001 6.38705L13.9941 10.3812L15.1726 9.20258L10.0001 4.03003ZM10.0001 8.73825L4.82745 13.9108L6.00596 15.0894L10.0001 11.0953L13.9941 15.0894L15.1726 13.9108L10.0001 8.73825Z"
        fill="#171717"
      />
    </svg>
  );
};

export default ArrowDoubleLineIcon;
