export default function Spinner() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div
        className="animate-spin h-96 w-96 rounded-full"
        style={{
          animationDuration: "2s",
          border: "50px solid #e5e7eb",
          borderTopColor: "transparent",
        }}
      ></div>
    </div>
  );
}
