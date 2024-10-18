/* eslint-disable react/prop-types */
export default function Box({ children, classes }) {
  return (
    <div
      style={{ boxShadow: "15px 15px 4px #555353" }}
      className={`bg-gradient-to-l from-[#D9D9D9] to-gray-300 rounded-3xl ${classes} `}
    >
      {children}
    </div>
  );
}
