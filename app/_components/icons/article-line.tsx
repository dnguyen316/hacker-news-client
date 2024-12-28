import { SVGProps } from "react";

const ArticleLineIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
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
        d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9603 2.5 17.5V2.50001C2.5 2.03977 2.8731 1.66667 3.33333 1.66667H16.6667C17.1269 1.66667 17.5 2.03977 17.5 2.50001V17.5C17.5 17.9603 17.1269 18.3333 16.6667 18.3333ZM15.8333 16.6667V3.33334H4.16667V16.6667H15.8333ZM5.83333 5.00001H9.16667V8.33334H5.83333V5.00001ZM5.83333 10H14.1667V11.6667H5.83333V10ZM5.83333 13.3333H14.1667V15H5.83333V13.3333ZM10.8333 5.83334H14.1667V7.50001H10.8333V5.83334Z"
        fill="#404040"
      />
    </svg>
  );
};

export default ArticleLineIcon;
