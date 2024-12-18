import { IDefaultIconProperties } from "@/types/icon";
import { memo } from "react";

const UnMemoizedLevelStar = ({width = 24, height = 24}: IDefaultIconProperties) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1867 0.00179769C7.54299 0.0395951 3.9782 1.91687 2.07989 4.97943C-0.939896 9.5543 -0.709241 16.0885 3.02001 20.221C5.41282 22.8643 9.11233 24.2195 12.698 23.971C16.6208 23.8956 20.4352 21.6822 22.2775 18.2781C23.9105 15.4879 24.3714 12.1173 23.7069 8.97851C23.0118 4.84244 19.6102 1.22578 15.4231 0.275094C14.0298 0.0246782 12.6001 -0.00926129 11.1867 0.00179769Z"
        fill="url(#paint0_radial_21_3)"
      />
      <path
        d="M21.1994 8.95833L14.0943 8.94967L11.8335 2.42535L9.49339 8.96199L2.02332 8.95667L7.97895 13.3752L6.20865 20.2528L12.2593 16.0812L17.4869 20.2525L15.9045 13.5202L21.1994 8.95833Z"
        fill="url(#paint1_linear_21_3)"
      />
      <path
        opacity="0.5"
        d="M9.49557 8.96049L2.02548 8.95517L7.98112 13.3737L6.21083 20.2513L12.2614 16.0797L13.3472 12.9341L16.2977 10.5314L10.5655 7.0824L9.49557 8.96049Z"
        fill="url(#paint2_linear_21_3)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_21_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.96372 12.6389) rotate(-0.591613) scale(18.5937 16.5513)"
        >
          <stop stop-color="#F4A406" />
          <stop offset="0.198188" stop-color="#F88108" />
          <stop offset="0.3075" stop-color="#FE5F0B" />
          <stop offset="0.535773" stop-color="#FB1E0B" />
          <stop offset="0.765387" stop-color="#9E0E0E" />
          <stop offset="1" stop-color="#29171F" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_21_3"
          x1="2.77149"
          y1="12.1212"
          x2="19.8975"
          y2="9.62609"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D3FA09" />
          <stop offset="0.514678" stop-color="#F1D206" />
          <stop offset="0.775196" stop-color="#FB420A" />
          <stop offset="1" stop-color="#FC1D0B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_21_3"
          x1="6.82003"
          y1="19.2861"
          x2="15.2947"
          y2="7.55671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D7FC08" />
          <stop offset="0.649994" stop-color="#D6FC07" />
          <stop offset="0.784361" stop-color="#E7D609" />
          <stop offset="1" stop-color="#F5B00A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const LevelStarIcon = memo(UnMemoizedLevelStar);
