import { createSvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

const SiteSettings = createSvgIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5569 1.99987C14.5633 1.99994 14.5687 2 14.5732 2H17.3059C17.3105 2 17.3159 1.99994 17.3223 1.99987C17.4196 1.9988 17.7281 1.9954 18.0457 2.16599C18.3621 2.33595 18.568 2.60603 18.7172 2.84313C19.0113 3.31075 19.3827 4.15404 19.9745 5.63276C20.0129 5.7286 20.0876 5.80239 20.1755 5.83857C20.2665 5.87602 20.3735 5.87516 20.4702 5.83113C21.7035 5.26978 22.4275 4.97615 22.8699 4.82166C23.3214 4.66397 23.5477 4.62638 23.7607 4.62638C24.1447 4.62638 24.516 4.76407 24.8072 5.01445L24.8573 5.05748L26.8264 7.02071L26.8321 7.0266C26.8354 7.02999 26.8394 7.03403 26.8441 7.03872C26.914 7.10928 27.1285 7.3257 27.2303 7.66631C27.333 8.00963 27.2893 8.34564 27.2265 8.62294C27.1034 9.16609 26.7678 10.0291 26.1382 11.4982C26.0995 11.5884 26.1 11.688 26.1343 11.771C26.17 11.8573 26.2436 11.9299 26.339 11.9651C27.8172 12.5108 28.6684 12.8602 29.1436 13.1493C29.3878 13.2978 29.665 13.5062 29.8374 13.8331C30.0045 14.1502 30.0012 14.4607 30.0001 14.5585C30 14.5652 30 14.5709 30 14.5755V17.3077C30 17.3124 30.0001 17.318 30.0001 17.3245C30.0012 17.4229 30.0046 17.7311 29.8361 18.0485C29.6668 18.3676 29.3963 18.5758 29.1565 18.7273C28.6855 19.0249 27.8367 19.3984 26.3501 19.992C26.2595 20.0281 26.19 20.0987 26.1562 20.1812C26.1215 20.2658 26.1224 20.3671 26.164 20.4577C26.8211 21.8881 27.1744 22.7356 27.3062 23.2749C27.374 23.5522 27.4225 23.8923 27.3174 24.2424C27.2153 24.5829 26.9987 24.8009 26.9297 24.8703C26.925 24.8751 26.921 24.8791 26.9177 24.8825L26.9124 24.8879L24.9915 26.807C24.6928 27.1054 24.2913 27.2783 23.8693 27.2905L23.8405 26.2909V27.2909C23.6183 27.2909 23.3858 27.2317 23.2246 27.1862C23.033 27.1321 22.8055 27.056 22.549 26.9628C22.0343 26.7757 21.3525 26.5011 20.513 26.1445C20.4183 26.1042 20.3147 26.1046 20.2255 26.1414C20.134 26.1791 20.0576 26.2567 20.0203 26.357C19.4731 27.8282 19.124 28.6735 18.838 29.1449C18.6918 29.3856 18.4862 29.662 18.1631 29.8349C17.8454 30.005 17.5345 30.0013 17.4381 30.0001C17.4316 30.0001 17.4261 30 17.4216 30H14.6884C14.6839 30 14.6784 30.0001 14.6719 30.0001C14.5749 30.0012 14.2665 30.0047 13.949 29.8347C13.6321 29.6649 13.4258 29.3948 13.2763 29.1574C12.9817 28.6896 12.6099 27.8457 12.0175 26.366C11.9793 26.2707 11.9052 26.1973 11.818 26.1611C11.727 26.1233 11.6197 26.124 11.5229 26.1681C10.289 26.7303 9.56587 27.0242 9.12494 27.1788C8.67577 27.3363 8.44992 27.3747 8.23624 27.3747C7.84824 27.3747 7.47347 27.2336 7.18179 26.9778L7.13438 26.9362L5.16666 24.972C5.16337 24.9686 5.15942 24.9646 5.15478 24.9599C5.0846 24.8898 4.86835 24.6737 4.76541 24.3321C4.66184 23.9883 4.70551 23.6517 4.76815 23.3746C4.89096 22.8313 5.22649 21.9679 5.85632 20.4988C5.89444 20.4099 5.89387 20.3116 5.86007 20.23C5.82504 20.1454 5.75279 20.074 5.65904 20.0393C4.18074 19.491 3.32977 19.1401 2.85487 18.8502C2.61094 18.7013 2.33422 18.4928 2.16222 18.1663C1.99509 17.849 1.99871 17.5386 1.99985 17.4408C1.99992 17.4341 1.99999 17.4285 1.99999 17.4238V14.6895C1.99999 14.6848 1.99993 14.6791 1.99985 14.6724C1.99874 14.5736 1.99524 14.2642 2.16284 13.9468C2.33284 13.6248 2.60536 13.4163 2.84509 13.2656C3.31517 12.9702 4.16344 12.5995 5.64698 12.0074C5.73702 11.9714 5.80635 11.9013 5.84029 11.8192C5.87534 11.7344 5.87461 11.6326 5.8327 11.5414C5.1727 10.1062 4.81717 9.25205 4.68784 8.70729C4.62117 8.42646 4.57457 8.07733 4.69254 7.71996C4.80574 7.37703 5.03525 7.16207 5.10707 7.0948C5.10944 7.09257 5.11164 7.09051 5.11366 7.08861L7.0056 5.19568C7.30278 4.89835 7.70209 4.72542 8.12227 4.71211L8.15395 5.7116V4.7116C8.37565 4.7116 8.60784 4.77026 8.77018 4.81582C8.96241 4.86977 9.19061 4.94573 9.44798 5.03891C9.9644 5.22588 10.6481 5.50041 11.4896 5.85727C11.5829 5.89683 11.6849 5.89633 11.7723 5.86009C11.8619 5.82297 11.9371 5.74672 11.9737 5.64785C12.5208 4.17297 12.8719 3.32652 13.16 2.85389C13.307 2.61271 13.5125 2.33806 13.8335 2.16572C14.1511 1.99518 14.461 1.99876 14.5569 1.99987ZM8.27526 6.75452L6.66608 8.36455C6.77144 8.71717 7.04331 9.38697 7.64979 10.7059C7.92061 11.2948 7.9395 11.9761 7.68866 12.5831C7.4454 13.1717 6.97234 13.6318 6.38834 13.8649C4.99859 14.4196 4.32571 14.7205 3.99999 14.9051V17.2019C4.32437 17.3767 4.99072 17.6583 6.35448 18.1641C6.96227 18.3895 7.45687 18.8583 7.70801 19.4651C7.95107 20.0523 7.94163 20.7105 7.69451 21.2869C7.10208 22.6688 6.84085 23.3592 6.74298 23.7196L8.35461 25.3283C8.38591 25.3181 8.42192 25.3059 8.46313 25.2915C8.81825 25.167 9.47667 24.9026 10.6937 24.3481C11.2885 24.0772 11.9737 24.0603 12.5846 24.3138C13.1764 24.5595 13.639 25.0353 13.8742 25.6226C14.4272 27.0038 14.7294 27.6748 14.9141 28H17.1889C17.363 27.6747 17.6434 27.0105 18.1457 25.6598C18.3743 25.0452 18.849 24.5458 19.4626 24.2926C20.053 24.049 20.7131 24.0565 21.2949 24.3037C22.122 24.655 22.7664 24.9138 23.2323 25.0831C23.4389 25.1582 23.6007 25.2122 23.722 25.2481L25.3329 23.6388C25.2272 23.2864 24.9549 22.6168 24.3466 21.2926C24.0771 20.7058 24.0576 20.0275 24.3057 19.4223C24.5483 18.8309 25.0226 18.3685 25.6085 18.1346C27.0016 17.5783 27.6751 17.2749 28 17.0893V14.7987C27.6754 14.6246 27.0092 14.3444 25.6464 13.8414C25.0353 13.6157 24.538 13.1447 24.286 12.535C24.0429 11.9468 24.0524 11.2877 24.2999 10.7103C24.8931 9.32619 25.1545 8.63573 25.2523 8.27547L23.6433 6.67135C23.6107 6.6819 23.5729 6.69459 23.5293 6.70982C23.1736 6.83405 22.5149 7.09788 21.2988 7.65142C20.7062 7.92117 20.0239 7.93887 19.4145 7.68813C18.8193 7.44325 18.3539 6.96588 18.1177 6.37596C17.5655 4.9962 17.2635 4.32536 17.079 4H14.8078C14.6332 4.32454 14.3511 4.98941 13.8489 6.34343C13.6216 6.956 13.1493 7.45446 12.5379 7.70778C11.9488 7.95184 11.2897 7.94488 10.7088 7.69857C9.88024 7.34721 9.23429 7.08859 8.76713 6.91946C8.55969 6.84435 8.39715 6.79042 8.27526 6.75452ZM25.3793 23.831C25.3793 23.831 25.3791 23.8298 25.379 23.8276Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18ZM16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
      fill="currentColor"
    />
  </>,
  "SiteSettings"
);

export default (props: SvgIconProps) => (
  <SiteSettings {...props} viewBox="0 0 32 32" />
);