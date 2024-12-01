import React from "react";

const HomeIcon = ({
  className = "",
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 16.6665C17.5 17.1267 17.1269 17.4998 16.6667 17.4998H3.33333C2.8731 17.4998 2.5 17.1267 2.5 16.6665V7.90743C2.5 7.65027 2.61873 7.40752 2.82172 7.24964L9.48842 2.06445C9.78933 1.8304 10.2107 1.8304 10.5116 2.06445L17.1782 7.24964C17.3812 7.40752 17.5 7.65027 17.5 7.90743V16.6665ZM15.8333 15.8332V8.315L10 3.77796L4.16667 8.315V15.8332H15.8333ZM5.83333 12.4998H14.1667V14.1665H5.83333V12.4998Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeIcon;
