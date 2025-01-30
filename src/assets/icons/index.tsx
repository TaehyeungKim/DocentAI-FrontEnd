import { twMerge } from "tailwind-merge";

interface IconProps {
  className?: string;
}

export const ArrowBack = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.86875 10.25L10.0688 14.45L9 15.5L3 9.5L9 3.5L10.0688 4.55L5.86875 8.75H15V10.25H5.86875Z"
        className="fill-primary"
      />
    </svg>
  );
};

export const Edit = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.1665 3.8332H3.33317C2.89114 3.8332 2.46722 4.00879 2.15466 4.32135C1.8421 4.63391 1.6665 5.05784 1.6665 5.49986V17.1665C1.6665 17.6086 1.8421 18.0325 2.15466 18.345C2.46722 18.6576 2.89114 18.8332 3.33317 18.8332H14.9998C15.4419 18.8332 15.8658 18.6576 16.1783 18.345C16.4909 18.0325 16.6665 17.6086 16.6665 17.1665V11.3332M15.4165 2.5832C15.748 2.25168 16.1977 2.06543 16.6665 2.06543C17.1353 2.06543 17.585 2.25168 17.9165 2.5832C18.248 2.91472 18.4343 3.36436 18.4343 3.8332C18.4343 4.30204 18.248 4.75168 17.9165 5.0832L9.99984 12.9999L6.6665 13.8332L7.49984 10.4999L15.4165 2.5832Z"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Send = () => {
  return (
    <svg width="100%" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_49_72)">
        <path
          d="M16.5 1.5L8.25 9.75M16.5 1.5L11.25 16.5L8.25 9.75M16.5 1.5L1.5 6.75L8.25 9.75"
          className="stroke-primary fill-transparent"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_49_72">
          <rect width="18" height="18" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Copy = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 9.375H2.5C2.16848 9.375 1.85054 9.2433 1.61612 9.00888C1.3817 8.77446 1.25 8.45652 1.25 8.125V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H8.125C8.45652 1.25 8.77446 1.3817 9.00888 1.61612C9.2433 1.85054 9.375 2.16848 9.375 2.5V3.125M6.875 5.625H12.5C13.1904 5.625 13.75 6.18464 13.75 6.875V12.5C13.75 13.1904 13.1904 13.75 12.5 13.75H6.875C6.18464 13.75 5.625 13.1904 5.625 12.5V6.875C5.625 6.18464 6.18464 5.625 6.875 5.625Z"
        className="stroke-primary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Refresh = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_83_26)">
        <path
          d="M14.375 2.49999V6.24999M14.375 6.24999H10.625M14.375 6.24999L11.475 3.52499C10.8033 2.85293 9.97227 2.36199 9.05949 2.09797C8.14672 1.83395 7.18194 1.80546 6.25518 2.01515C5.32842 2.22484 4.46988 2.66588 3.75967 3.29712C3.04946 3.92836 2.51073 4.72923 2.19375 5.62499M0.625 12.5V8.74999M0.625 8.74999H4.375M0.625 8.74999L3.525 11.475C4.19672 12.147 5.02773 12.638 5.94051 12.902C6.85328 13.166 7.81806 13.1945 8.74482 12.9848C9.67158 12.7751 10.5301 12.3341 11.2403 11.7028C11.9505 11.0716 12.4893 10.2707 12.8062 9.37499"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_26">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={twMerge("stroke-[#74B38D]", className)}
        d="M19.25 19.25L15.2625 15.2625M17.4167 10.0833C17.4167 14.1334 14.1334 17.4167 10.0833 17.4167C6.03325 17.4167 2.75 14.1334 2.75 10.0833C2.75 6.03325 6.03325 2.75 10.0833 2.75C14.1334 2.75 17.4167 6.03325 17.4167 10.0833Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Navigate = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 10.4167V15.9167C15.5 16.4029 15.3068 16.8692 14.963 17.213C14.6192 17.5568 14.1529 17.75 13.6667 17.75H3.58333C3.0971 17.75 2.63079 17.5568 2.28697 17.213C1.94315 16.8692 1.75 16.4029 1.75 15.9167V5.83333C1.75 5.3471 1.94315 4.88079 2.28697 4.53697C2.63079 4.19315 3.0971 4 3.58333 4H9.08333M12.75 1.25H18.25M18.25 1.25V6.75M18.25 1.25L8.16667 11.3333"
        stroke="#74B38D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const X_icon = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 5.5L5.5 16.5M5.5 5.5L16.5 16.5"
        stroke="#74B38D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NavigateArrow = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5832 15.5834L6.4165 6.41675M6.4165 6.41675V15.5834M6.4165 6.41675H15.5832"
        stroke="#74B38D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
