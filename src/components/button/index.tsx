export default function Button() {
  return (
    <>
      <button className="w-[16px] flex justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            className="w-[4px] h-[4px] bg-[#C3CAD9] rounded-full"
            key={index}
          ></span>
        ))}
      </button>
    </>
  );
}
