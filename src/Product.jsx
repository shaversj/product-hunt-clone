import VoteButton from "./VoteButton.jsx";

function Product({id, title, description, logo, votes, onVote}) {
  return (
    <>
      <div className="flex max-w-lg">
        <div className="w-[80px] h-[80px]">
          <img className="h-[53px] w-[60px]" src={logo} alt="" />
        </div>
        <div className="text-left">
          <h1 className="font-opensans text-[12px] text-gray-600">{title}</h1>
          <p className="font-opensans text-[12px] text-gray-400">{description}</p>
        </div>
        <div className="ml-auto h-10 border-l-[1.25px] border-gray-300">
            <div className="ml-2 grid place-items-center">
              <button onClick={() => onVote(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>


          <span className="pt-[3px] font-opensans text-[12px] block">{votes}</span>
            </div>

        </div>
      </div>
    </>
  );
}

export default Product;
