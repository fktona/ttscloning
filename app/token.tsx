export default function TokenomicsContent() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full    lg:px-8 py-12 overflow-y-auto no-scrollbar">
      <div className="relative">
        <div className="w-full h-full relative blurs rounded-lg">
          <iframe
            src="https://my.spline.design/particlescopy-6ff2282b232aefa774235464dd70e2be/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="absolute top-0 left-0 w-full  h-full"
          ></iframe>
        </div>
      </div>

      <div className="relative p-4 flex flex-col items-center justify-center ">
        <div
          className="w-6
       absolute top-0 left-0 aspect-square  border-t-2 border-l-2 border-white"
        />
        <div
          className="w-6
       aspect-square border-t-2  border-r-2 absolute top-0 right-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-l-2 absolute bottom-0 left-0 border-white"
        />
        <div
          className="w-6
       aspect-square border-b-2 border-r-2 absolute bottom-0 right-0 border-white"
        />
        <div>
          <div className="blurs p-4 font-byte flex flex-col items-center justify-center ">
            <div className="space-y-3">
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Circulating Supply (92.5%)
              </h2>
              <p className="text-white font-byte  text-[24px]">
                92.5% of our tokens are already out there, actively fueling the
                hands-on energy of the community. this ensures a vibrant and
                dynamic ecosystem where the token is used, traded, and driving
                innovation. think of it as the powerhouse that keeps our
                conversational ai vision moving forward.
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Token Lock (5%)
              </h2>
              <p className="text-white font-byte  text-[24px]">
                we've set aside 5% of the tokens in a secure reserve. this helps
                us plan for the future— whether it's funding new developments,
                forming partnerships, or tackling unforeseen opportunities.
                these are the "rainy day" tokens that ensure the project's
                long-term growth and stability.
              </p>
            </div>
            <div>
              <h2 className="text-blue-400 font-byte mb-1 font-bold text-[36px]">
                Team (2.5%)
              </h2>
              <p className="text-white font-byte text-[24px]">
                our team holds a small 2.5% of the tokens. this keeps us
                motivated and aligned with the project's success while ensuring
                most of the value remains with the community. it's a fair share
                for the work, passion, and commitment we're putting into
                building the future of conversational ai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
