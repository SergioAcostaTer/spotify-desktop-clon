import { useNavigate } from "react-router-dom";

export default function PageHeader({ opacity = "00", backgroundColor = "#80A8C0" }: { opacity?: string, backgroundColor?: string }) {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate(1);
  };

  return (
    <div className={`absolute top-0 left-0 w-full z-10 px-[20px] relative h-[64px] flex items-center justify-between rounded-t-[8px]`}
      style={{ backgroundColor: `${backgroundColor}${opacity}` }}
    >

    <div className="h-[32px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-[8px]">
          <button className="w-[32px] h-[32px] rounded-full bg-[#000000B3] flex items-center justify-center">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#fff"
              onClick={handlePrev}
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </button>

          <button
            className="w-[32px] h-[32px] rounded-full bg-[#000000B3] flex items-center justify-center"
            style={
              {
                //   backgroundColor: true ? "#000000B3" : "#00000033",
              }
            }
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#fff"
              onClick={handleNext}
            >
              <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
            </svg>
          </button>
        </div>

        <div className="flex gap-[8px] h-[32px]">
          <button className="flex items-center justify-center rounded-full bg-white px-[16px] h-full">
            <span className="text-[14px] text-black font-bold">
              Descubrir Premium
            </span>
          </button>

          <button className="flex items-center justify-center rounded-full bg-[#000000B3] px-[14px] h-full gap-[4px]">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#fff"
            >
              <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
            </svg>
            <span className="text-white text-[14px] font-bold">
              Instalar app
            </span>
          </button>

          <button className="w-[32px] h-[32px] rounded-full bg-[#000000B3] flex items-center justify-center relative">
            <div className="absolute top-[-10px] left-[10px] w-full h-full flex items-center justify-center">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="50%" cy="50%" r="6" fill="#4687D6"></circle>
              </svg>
            </div>
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              fill="#fff"
            >
              <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
            </svg>
          </button>

          <button className="w-[32px] h-[32px] rounded-full bg-[#000000B3] flex items-center justify-center">
            <img
              src="https://i.scdn.co/image/ab67757000003b821a7364041a9bee73221099d2"
              alt="Avatar"
              className="w-[24px] h-[24px] rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
