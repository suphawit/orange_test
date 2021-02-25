import React from "react";

const SVGphrase = (width, height) => {
  return (
    <svg width="18" height="18" style={{ width, height }} viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63" fillRule="nonzero">
          <g>
            <path
              d="M17.25 0H.75C.336 0 0 .336 0 .75v16.5c0 .414.336.75.75.75h16.5c.414 0 .75-.336.75-.75V.75c0-.414-.336-.75-.75-.75zm-.75 16.5h-15v-15h15v15z"
              transform="translate(-54 -136) translate(54 136)"
            />
            <path
              d="M12.75 4.8h-7.5c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75S6 7.464 6 7.05V6.3h2.25v6H7.5c-.414 0-.75.336-.75.75s.336.75.75.75h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-.75v-6H12v.75c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z"
              transform="translate(-54 -136) translate(54 136)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
const SVGbank = (width, height) => {
  return (
    <svg width="20" height="19" style={{ width, height }} viewBox="0 0 20 19">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63" fillRule="nonzero" stroke="#FFF" strokeWidth=".25">
          <g>
            <path
              d="M1.9 18.357h16.2c.497 0 .9-.388.9-.868v-3.471c0-.48-.403-.868-.9-.868h-.9V8.81h.9c.497 0 .9-.388.9-.867V5.339c0-.343-.21-.654-.535-.793l-8.1-3.471c-.232-.1-.498-.1-.73 0l-8.1 3.471c-.326.14-.535.45-.535.793v2.604c0 .48.403.868.9.868h.9v4.339h-.9c-.497 0-.9.389-.9.868v3.471c0 .48.403.868.9.868zm.9-12.454L10 2.817l7.2 3.086v1.172H2.8V5.903zm12.6 2.908v4.339H13V8.81h2.4zm-4.2 0v4.339H8.8V8.81h2.4zm-4.2 0v4.339H4.6V8.81H7zm-4.2 6.075h14.4v1.735H2.8v-1.735z"
              transform="translate(-92 -136) translate(92 136)"
            />
            <path
              d="M10.75 4.536H8.917c-.507 0-.917.36-.917.803 0 .444.41.804.917.804h1.833c.506 0 .917-.36.917-.804 0-.444-.41-.803-.917-.803z"
              transform="translate(-92 -136) translate(92 136)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGproduct = (width, height) => {
  return (
    <svg width="20" height="14" style={{ width, height }} viewBox="0 0 20 14">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63" fillRule="nonzero" stroke="#002D63">
          <g>
            <path
              d="M17.97 9.357L16.24.842c-.004-.025-.014-.047-.025-.068-.036-.146-.1-.282-.193-.397-.196-.243-.487-.377-.82-.377H3.422c-.654 0-1.294.536-1.428 1.195L.025 10.882c-.069.338.005.673.202.918.196.243.487.376.82.376h11.78c.654 0 1.294-.536 1.428-1.195l.067-.33h2.775c.27 0 .51-.114.677-.321.2-.25.272-.604.197-.973zm-4.192 1.525c-.088.435-.523.802-.95.802H1.046c-.184 0-.341-.07-.443-.195-.106-.132-.142-.312-.102-.508L2.47 1.294c.089-.434.524-.801.951-.801h11.78c.185 0 .342.069.443.195.106.131.143.311.103.507l-1.862 9.16v.001l-.107.526zm3.619-.864c-.074.092-.178.14-.3.14h-2.675l.64-3.145.968-4.765 1.465 7.208c.045.224.01.429-.098.562h0zm-5.594-.075h-2.99l.205-1.01h2.99l-.205 1.01z"
              transform="translate(-132 -138) translate(133 139)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGtrash = (width, height) => {
  return (
    <svg width="24" height="24" style={{ width, height }} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63">
          <g>
            <path
              d="M14 3c1.325 0 2.41 1.032 2.495 2.336l.005.164v.833h3.333c.46 0 .834.373.834.834 0 .425-.318.775-.73.827L19.834 8 19 7.999v10.834c0 1.326-1.032 2.41-2.336 2.495l-.164.005H8.167c-1.326 0-2.41-1.031-2.495-2.335l-.005-.165L5.666 8 4.833 8C4.373 8 4 7.627 4 7.167c0-.425.318-.776.729-.827l.104-.007h3.333V5.5c0-1.325 1.032-2.41 2.336-2.495L10.667 3H14zm3.333 4.999h-10v10.834c0 .425.318.776.73.827l.104.007H16.5c.425 0 .775-.318.827-.73l.006-.104V8zM10.667 10.5c.425 0 .775.318.827.729l.006.104v5c0 .46-.373.834-.833.834-.425 0-.776-.318-.827-.73l-.007-.104v-5c0-.46.373-.833.834-.833zm3.333 0c.425 0 .775.318.827.729l.006.104v5c0 .46-.373.834-.833.834-.425 0-.775-.318-.827-.73l-.006-.104v-5c0-.46.373-.833.833-.833zm0-5.833h-3.333c-.425 0-.776.318-.827.728l-.007.105v.833h5V5.5c0-.425-.318-.775-.728-.827L14 4.667z"
              transform="translate(-167 -131) translate(167 131)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGarrowGray = (width, height) => {
  return (
    <svg width="7" height="11" style={{ width, height }} viewBox="0 0 7 11">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#999" strokeWidth="2">
          <path
            d="M54.763 199L59 203.237 54.968 207.27"
            transform="translate(-53 -198)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGarrowNavy = (width, height) => {
  return (
    <svg width="7" height="11" style={{ width, height }} viewBox="0 0 7 11">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#002D63" strokeWidth="2">
          <path
            d="M54.763 171L59 175.237 54.968 179.27"
            transform="translate(-53 -170)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGarrowWhite = (width, height) => {
  return (
    <svg width="7" height="11" style={{ width, height }} viewBox="0 0 7 11">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#fff" strokeWidth="2">
          <path
            d="M54.763 171L59 175.237 54.968 179.27"
            transform="translate(-53 -170)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGadd = (width, height) => {
  return (
    <svg width="11" height="10" style={{ width, height }} viewBox="0 0 11 10">
      <g fill="none" fillRule="evenodd" strokeLinecap="square">
        <g stroke="#FFF" strokeWidth="2">
          <g>
            <g>
              <path
                d="M4.5 0L4.5 8"
                transform="translate(-57 -226) translate(51 218) translate(7 9)"
              />
              <path
                d="M4.5 0L4.5 8"
                transform="translate(-57 -226) translate(51 218) translate(7 9) rotate(90 4.5 4)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGedit = (width, height) => {
  return (
    <svg width="24" height="24" style={{ width, height }} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63">
          <g>
            <g>
              <path
                d="M8.5 2.667c.46 0 .833.373.833.833 0 .425-.318.775-.728.827l-.105.006H2.667c-.425 0-.776.318-.827.73l-.007.104v11.666c0 .425.318.776.73.827l.104.007h11.666c.425 0 .776-.318.827-.73l.007-.104V11c0-.46.373-.833.833-.833.425 0 .775.318.827.728l.006.105v5.833c0 1.326-1.031 2.41-2.335 2.495l-.165.005H2.667c-1.326 0-2.41-1.031-2.495-2.335l-.005-.165V5.167c0-1.326 1.031-2.41 2.335-2.495l.165-.005H8.5zm5.66-1.006c1.017-1.016 2.663-1.016 3.68 0 1.015 1.016 1.015 2.662 0 3.678l-7.917 7.917c-.107.107-.241.182-.388.22l-3.333.832c-.61.153-1.163-.4-1.01-1.01l.833-3.333c.037-.147.112-.28.22-.388zm2.5 1.178c-.364-.365-.956-.365-1.32 0l-7.755 7.753-.44 1.762 1.762-.44 7.754-7.753c.334-.335.362-.86.083-1.226z"
                transform="translate(-115 -74) translate(115 74) translate(3 2)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGlinked = (width, height) => {
  return (
    <svg width="18" height="17" style={{ width, height }} viewBox="0 0 18 17">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63" fillRule="nonzero">
          <g>
            <path
              d="M17.125 7.513c-.474 0-.857.383-.857.857v3.879c0 1.189-.968 2.157-2.157 2.157H3.888c-1.19 0-2.157-.968-2.157-2.157V3.894c0-1.19.968-2.157 2.157-2.157h5.41c.473 0 .857-.383.857-.857 0-.473-.384-.857-.857-.857h-5.41C1.753.023.017 1.76.017 3.894v8.355c0 2.135 1.736 3.871 3.87 3.871h10.224c2.134 0 3.87-1.736 3.87-3.87V8.37c.001-.473-.383-.857-.856-.857z"
              transform="translate(-321 -79) translate(321 79)"
            />
            <path
              d="M17.98.857c0-.041-.005-.082-.012-.124-.07-.402-.438-.705-.843-.71h-3.913c-.474 0-.857.383-.857.857 0 .473.383.857.857.857h1.714L8.718 7.44c-.349.32-.372.862-.051 1.21.168.184.4.278.631.278.207 0 .415-.075.58-.226l6.39-5.872V4.64c0 .473.384.857.858.857.473 0 .857-.384.857-.857V.88L17.98.857z"
              transform="translate(-321 -79) translate(321 79)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGmessage = (width, height) => {
  return (
    <svg width="18" height="18" style={{ width, height }} viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g fill="#002D63">
              <path
                d="M9.953.001L9.453 0C8.127-.003 6.816.307 5.63.906 2.738 2.352.908 5.31.907 8.546l.007.362c.044 1.082.296 2.148.742 3.136L.045 16.881l-.028.104c-.127.624.473 1.18 1.102.97l4.836-1.612.333.142c1.005.403 2.08.61 3.168.608 3.234-.001 6.192-1.83 7.64-4.726.597-1.183.907-2.494.904-3.823v-.45C17.76 3.707 14.293.24 9.953 0zm-.502 1.697h.422l-.013-.001c3.476.192 6.251 2.967 6.443 6.443l-.001.407c.003 1.063-.245 2.11-.724 3.058-1.16 2.323-3.531 3.789-6.125 3.79-1.063.003-2.11-.245-3.058-.724l-.125-.05c-.17-.055-.354-.055-.526.003l-3.552 1.183 1.184-3.55c.072-.216.055-.45-.047-.652-.479-.948-.727-1.995-.724-3.056.001-2.596 1.467-4.966 3.787-6.125.95-.48 1.998-.729 3.06-.726z"
                transform="translate(-151 -76) translate(151 76)"
              />
            </g>
            <path
              stroke="#002D63"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6.5 6.5L12.5 6.5M6.5 10.5L12.5 10.5"
              transform="translate(-151 -76) translate(151 76)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGup = (width, height) => {
  return (
    <svg width="50" height="50" style={{ width, height }} viewBox="0 0 50 50">
      <defs>
        <filter
          id="dds69kwk5a"
          width="148.8%"
          height="148.8%"
          x="-24.4%"
          y="-24.4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="1.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#002D63" strokeWidth="3.5">
          <g
            filter="url(#dds69kwk5a)"
            transform="translate(-42 -63) translate(47 67)"
          >
            <circle cx="20" cy="20" r="20" fill="#FFF" />
            <path d="M10 24.286L19.309 14.286 28.618 24.286" />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGservice = (width, height) => {
  return (
    <svg width="18" height="18" style={{ width, height }} viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63">
          <g>
            <g>
              <path
                d="M17.793 6.524c.655 0 1.186.531 1.186 1.186v2.373c0 .438-.238.821-.592 1.027l-.001 6.09c0 .982-.797 1.779-1.78 1.779H4.746c-.983 0-1.78-.797-1.78-1.78V11.11c-.354-.205-.593-.588-.593-1.027V7.71c0-.655.531-1.186 1.187-1.186h5.337c-1.31 0-2.372-1.062-2.372-2.372 0-1.31 1.062-2.373 2.372-2.373.71 0 1.345.311 1.78.804.434-.493 1.07-.804 1.779-.804 1.31 0 2.372 1.062 2.372 2.373 0 1.31-1.062 2.372-2.372 2.372zm-7.71 4.744H4.15V17.2c0 .295.216.54.498.585l.096.008h5.337v-6.525zm7.116 0h-5.93v6.524h5.338c.294 0 .539-.214.585-.496l.008-.096v-5.932zM10.082 7.71L3.56 7.71v2.373h6.523V7.708zm7.71.001h-6.524v2.372h6.525V7.71zM8.897 2.965c-.655 0-1.186.532-1.186 1.187s.531 1.186 1.186 1.186h1.187V4.152l-.007-.124c-.059-.568-.518-1.017-1.091-1.06zm3.559 0l-.089.004c-.613.045-1.097.557-1.097 1.183v1.186h1.186c.655 0 1.186-.531 1.186-1.186 0-.655-.53-1.187-1.186-1.187z"
                transform="translate(-252 -74) translate(250 73) translate(.297)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGclose = (width, height) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g fill="#F68B1F">
          <g>
            <path
              d="M3.118 1.291l.099.09 6.874 6.873 6.874-6.874c.507-.507 1.33-.507 1.836 0 .476.476.506 1.228.09 1.738l-.09.099-6.873 6.874 6.873 6.874c.508.507.508 1.33 0 1.836-.475.476-1.227.506-1.738.09l-.098-.09-6.874-6.873-6.874 6.873c-.507.508-1.33.508-1.837 0-.475-.475-.505-1.227-.089-1.738l.09-.098 6.873-6.874L1.38 3.217c-.507-.507-.507-1.33 0-1.837.476-.475 1.228-.505 1.738-.089z"
              transform="translate(-286 -75) translate(286 75)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGcloseCircle = (width, height) => {
  return (
    <svg width="40" height="40" style={{ width, height }} viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <g>
          <g stroke="#F68B1F" strokeWidth="3">
            <circle cx="20" cy="20" r="18.5"></circle>
          </g>
          <g fill="#F68B1F">
            <path
              d="M2.118.291l.099.09 6.874 6.873L15.965.38c.507-.507 1.33-.507 1.836 0 .476.476.506 1.228.09 1.738l-.09.099-6.873 6.874 6.873 6.874c.508.507.508 1.33 0 1.836-.475.476-1.227.506-1.738.09l-.098-.09-6.874-6.873-6.874 6.873c-.507.508-1.33.508-1.837 0-.475-.475-.505-1.227-.089-1.738l.09-.098L7.253 9.09.38 2.217C-.127 1.71-.127.887.38.38.856-.095 1.608-.125 2.118.291z"
              transform="translate(10.91 10.91)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGverify = (width, height) => {
  return (
    <svg width="18" height="18" style={{ width, height }} viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <g fill="#1EB950">
          <g>
            <path
              d="M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm2.777 6.168l-.057.052-3.97 3.97-1.47-1.47c-.274-.275-.709-.292-1.003-.052l-.057.052c-.275.274-.292.709-.052 1.003l.052.057 2 2c.274.275.709.292 1.003.052l.057-.052 4.5-4.5c.293-.293.293-.767 0-1.06-.274-.275-.709-.292-1.003-.052z"
              transform="translate(-184 -76) translate(184 76)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGnotVerify = (width, height) => {
  return (
    <svg width="18" height="18" style={{ width, height }} viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <g fill="#DA2110">
          <g>
            <path
              d="M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM6.53 5.47c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06L7.939 9l-2.47 2.47c-.292.293-.292.767 0 1.06.294.293.768.293 1.061 0L9 10.061l2.47 2.47c.266.266.683.29.976.072l.084-.073c.293-.293.293-.767 0-1.06L10.061 9l2.47-2.47c.292-.293.292-.767 0-1.06-.294-.293-.768-.293-1.061 0L9 7.939z"
              transform="translate(-217 -75) translate(217 75)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGbuttonArrowLeft = (width, height, color) => {
  return (
    <svg width="6" height="9" style={{ width, height }} viewBox="0 0 6 9">
      <g fill="none" fillRule="evenodd">
        <g stroke={color || "#002D63"} strokeWidth="2">
          <g>
            <g>
              <path
                d="M-1 2L2 5 5 2"
                transform="translate(-353 -115) translate(348 106) translate(6 10) rotate(90 2 3.5)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGbuttonArrowDown = (width, height, color) => {
  return (
    <svg width="8" height="6" style={{ width, height }} viewBox="0 0 8 6">
      <g fill="none" fillRule="evenodd">
        <g stroke={color || "#002D63"} strokeWidth="2">
          <g>
            <path
              d="M137 13L140 16 143 13"
              transform="translate(-483 -151) translate(347 139)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGsubMenuArrow = (width, height, color) => {
  return (
    <svg width="7" height="11" style={{ width, height }} viewBox="0 0 7 11">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke={color || "#002D63"} strokeWidth="2">
          <path
            d="M72.763 170L77 174.237 72.968 178.27"
            transform="translate(-71 -169)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGbackToPageArrow = (width, height, color) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M0 0L20 0 20 20 0 20z"
              transform="translate(-340 -241) translate(340 241)"
            />
            <path
              fill={color || "#002D63"}
              d="M11.91 4.41c.326-.325.854-.325 1.18 0 .3.301.323.774.069 1.1l-.07.08L8.68 10l4.41 4.41c.3.301.324.774.07 1.1l-.07.08c-.3.3-.773.323-1.1.069l-.078-.07-5-5c-.3-.3-.324-.773-.07-1.1l.07-.078 5-5z"
              transform="translate(-340 -241) translate(340 241)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
const SVGtableSortingArrowUp = (width, height, color) => {
  return (
    <svg width="9" height="6" style={{ width, height }} viewBox="0 0 9 6">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke={color || "#002D63"} strokeWidth="2">
          <path
            d="M367 296L370.5 292 374 296"
            transform="translate(-366 -291)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGtableSortingArrowDown = (width, height, color) => {
  return (
    <svg width="9" height="6" style={{ width, height }} viewBox="0 0 9 6">
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke={color || "#002D63"} strokeWidth="2">
          <path
            d="M52 198L55.5 194 59 198"
            transform="translate(-51 -193) rotate(-180 55.5 196)"
          />
        </g>
      </g>
    </svg>
  );
};

const SVGcalendar = (width, height) => {
  return (
    <svg width="24" height="24" style={{ width, height }} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63">
          <g>
            <path
              d="M15.2 3c.408 0 .744.312.794.716l.006.102v.818h1.6c1.272 0 2.314 1.013 2.395 2.294l.005.16v11.455C20 19.901 18.925 21 17.6 21H6.4C5.075 21 4 19.901 4 18.545V7.091c0-1.356 1.075-2.455 2.4-2.455H8v-.818C8 3.366 8.358 3 8.8 3c.408 0 .744.312.794.716l.006.102v.818h4.8v-.818c0-.452.358-.818.8-.818zm3.2 8.181H5.6v7.364c0 .418.305.762.7.812l.1.007h11.2c.442 0 .8-.367.8-.819v-7.364zM8 6.272H6.4c-.442 0-.8.367-.8.819v2.454h12.8V7.091c0-.417-.305-.761-.7-.812l-.1-.006-1.6-.001v.819c0 .452-.358.818-.8.818-.408 0-.744-.312-.794-.715L14.4 7.09v-.819H9.6v.819c0 .452-.358.818-.8.818-.408 0-.744-.312-.794-.715L8 7.09v-.819z"
              transform="translate(-51 -261) translate(51 261)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGmail = (width, height) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g>
          <g transform="translate(-214 -263) translate(214 263)">
            <path d="M0 0L20 0 20 20 0 20z" />
            <rect
              width="15"
              height="11.667"
              x="2.5"
              y="4.167"
              stroke="#002D63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              rx="2"
            />
            <path
              stroke="#002D63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.5 5.833L10 10.833 17.5 5.833"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGnews = (width, height) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M0 0L20 0 20 20 0 20z"
              transform="translate(-183 -263) translate(183 263)"
            />
            <path
              stroke="#002D63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.333 5h2.5c.46 0 .834.373.834.833V15c0 .92-.747 1.667-1.667 1.667S13.333 15.92 13.333 15V4.167c0-.46-.373-.834-.833-.834H4.167c-.46 0-.834.373-.834.834v10c0 1.38 1.12 2.5 2.5 2.5H15M6.667 6.667L10 6.667M6.667 10L10 10M6.667 13.333L10 13.333"
              transform="translate(-183 -263) translate(183 263)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGrefresh = (width, height) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              d="M0 0L20 0 20 20 0 20z"
              transform="translate(-149 -262) translate(149 262)"
            />
            <path
              fill="#002D63"
              fillRule="nonzero"
              d="M4.159 10.719c.367 2.642 2.457 4.712 5.103 5.053 2.2.284 4.334-.686 5.579-2.438h-1.508c-.427 0-.78-.322-.827-.737L12.5 12.5c0-.427.322-.78.736-.828l.097-.005h3.334c.427 0 .78.321.827.736l.006.097v3.333c0 .46-.373.834-.833.834-.428 0-.78-.322-.828-.736l-.006-.098v-1.06c-1.628 1.945-4.168 2.99-6.784 2.652-3.392-.437-6.07-3.09-6.541-6.477-.063-.456.255-.877.71-.94.456-.063.877.255.94.71zm6.792-8.144c3.392.437 6.07 3.09 6.541 6.477.063.456-.255.877-.71.94-.456.063-.877-.255-.94-.71-.368-2.643-2.458-4.713-5.104-5.054-2.201-.284-4.334.687-5.58 2.44l1.509-.001c.427 0 .78.321.827.736L7.5 7.5c0 .427-.322.78-.736.828l-.097.005H3.333c-.427 0-.78-.321-.827-.736L2.5 7.5V4.167c0-.46.373-.834.833-.834.428 0 .78.322.828.736l.006.098v1.059c1.629-1.944 4.169-2.989 6.784-2.651z"
              transform="translate(-149 -262) translate(149 262)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SVGuserCircle = (width, height) => {
  return (
    <svg width="20" height="20" style={{ width, height }} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g fill="#002D63" fillRule="nonzero">
          <g>
            <g>
              <path
                d="M8.079 16.663l-.034-.002-.067-.003C3.541 16.473 0 12.817 0 8.333 0 3.731 3.731 0 8.333 0c4.603 0 8.334 3.731 8.334 8.333 0 4.484-3.542 8.141-7.98 8.326-.118.005-.236.008-.354.008l.288-.005c-.095.003-.191.005-.288.005l-.254-.004zM8.349 10h-.03c-1.52.01-2.897 1.594-3.249 3.816l-.027.187.067.045c.895.572 1.904.9 2.959.946H8.04c.015 0 .03 0 .046.002l.247.004.264-.005.054-.002-.053.001c1.054-.047 2.064-.374 2.959-.946l.066-.046-.026-.187c-.343-2.158-1.654-3.715-3.121-3.81L8.349 10zm-.016-8.333c-3.682 0-6.666 2.984-6.666 6.666 0 1.801.714 3.435 1.874 4.635.394-1.692 1.291-3.1 2.478-3.904C5.391 8.459 5 7.609 5 6.667c0-1.841 1.492-3.334 3.333-3.334 1.841 0 3.334 1.493 3.334 3.334 0 .942-.391 1.793-1.02 2.4 1.187.801 2.084 2.208 2.48 3.9 1.16-1.2 1.873-2.833 1.873-4.634 0-3.682-2.985-6.666-6.667-6.666zm0 3.333c-.92 0-1.666.746-1.666 1.667 0 .92.746 1.666 1.666 1.666.92 0 1.667-.746 1.667-1.666C10 5.747 9.254 5 8.333 5z"
                transform="translate(-115 -262) translate(115 262) translate(1.667 1.667)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export function Icon({ icon, width, height, color }) {
  switch (icon) {
    case "phrase":
      return SVGphrase(width, height);
    case "bank":
      return SVGbank(width, height);
    case "product":
      return SVGproduct(width, height);
    case "trash":
      return SVGtrash(width, height);
    case "arrow-gray":
      return SVGarrowGray(width, height);
    case "arrow-navy":
      return SVGarrowNavy(width, height);
    case "arrow-white":
      return SVGarrowWhite(width, height);
    case "add":
      return SVGadd(width, height);
    case "edit":
      return SVGedit(width, height);
    case "linked":
      return SVGlinked(width, height);
    case "message":
      return SVGmessage(width, height);
    case "up":
      return SVGup(width, height);
    case "service":
      return SVGservice(width, height);
    case "close":
      return SVGclose(width, height);
    case "close-circle":
      return SVGcloseCircle(width, height);
    case "verify":
      return SVGverify(width, height);
    case "not-verify":
      return SVGnotVerify(width, height);
    case "button-arrow-left":
      return SVGbuttonArrowLeft(width, height, color);
    case "button-arrow-down":
      return SVGbuttonArrowDown(width, height, color);
    case "sub-menu-arrow":
      return SVGsubMenuArrow(width, height, color);
    case "back-to-page-arrow":
      return SVGbackToPageArrow(width, height, color);
    case "table-sorting-arrow-up":
      return SVGtableSortingArrowUp(width, height, color);
    case "table-sorting-arrow-down":
      return SVGtableSortingArrowDown(width, height, color);
    case "calendar":
      return SVGcalendar(width, height);
    case "mail":
      return SVGmail(width, height);
    case "news":
      return SVGnews(width, height);
    case "refresh":
      return SVGrefresh(width, height);
    case "user-circle":
      return SVGuserCircle(width, height);
    default:
      return null;
  }
}
