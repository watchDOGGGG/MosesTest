import { TitleWithLine } from "../ui";

export const HomePageContactForm = () => {
  return (
    <div className="w-full md:w-[600px] lg:w-[500px] mx-auto">
      <TitleWithLine>Get in touch</TitleWithLine>
      <p className="text-[#1F311D] text-[16px] mt-10">
        Our team would love to hear from you
      </p>

      <div className="mt-10">
        <div className="mb-5">
          <label
            style={{ color: "rgba(0, 0, 0, 0.4)" }}
            className="mb-2 block text-sm md:text-base"
          >
            Name
          </label>
          <input
            type={"text"}
            className="w-full outline-none h-[45px] md:h-[60px] placeholder:text-[#C1D7BE] border border-[#334155] p-4 text-sm md:text-base"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-5">
          <label
            style={{ color: "rgba(0, 0, 0, 0.4)" }}
            className="mb-2 block text-sm md:text-base"
          >
            Email
          </label>
          <input
            type={"text"}
            className="w-full outline-none h-[45px] md:h-[60px] placeholder:text-[#C1D7BE] border border-[#334155] p-4 text-sm md:text-base"
            placeholder="Kinrieltech@gmail.com"
          />
        </div>

        <div className="mb-5">
          <label
            style={{ color: "rgba(0, 0, 0, 0.4)" }}
            className="mb-2 block text-sm md:text-base"
          >
            Message
          </label>
          <textarea
            className="w-full outline-none h-[120px] placeholder:text-[#C1D7BE] border border-[#334155] p-4 text-sm md:text-base"
            placeholder="Your message here"
          ></textarea>
        </div>

        <div>
          <button className="text-white w-full h-[46px] md:h-[61px] flex items-center justify-center bg-[#1DBF73] text-[14px] md:text-base">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
