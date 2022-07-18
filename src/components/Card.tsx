import Image from "next/image";
import check from "../../public/check.png";
import sampleIcon from "../../public/favicon/favicon-32x32.png";


// TODO
// dynamic routing on card click

const Card = () => {
  return (
    <div className="border-2 rounded-xl w-full p-4 max-w-sm cursor-pointer hover:scale-105 ease-in-out duration-150">
      <div className="flex items-center gap-3">
        <Image
          src={sampleIcon}
          alt="sample icon"
          layout="fixed"
          className="rounded-full"
        />
        <h2 className="font-semibold text-xl text-mine-shaft-400">Web3 PHL</h2>
        <div className="ml-auto flex items-center gap-2">
          <Image src={check} alt="sample icon" height={18} width={18} />
          <p className="text-xs tracking-wide text-purple-heart">Verified</p>
        </div>
      </div>
      <p className="text-sm tracking-wide leading-4 opacity-80 my-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        ipsam qui excepturi quam eius, ratione nulla, nesciunt quo autem
        consequatur rem debitis, atque adipisci saepe est sed porro? Illum,
        incidunt.
      </p>
      <ul className="text-xs flex gap-2">
        <li className="px-2 py-1 bg-purple-heart text-white rounded-sm lowercase">
          NFT
        </li>
        <li className="px-2 py-1 bg-purple-heart text-white rounded-sm lowercase">
          DeFi
        </li>
        <li className="px-2 py-1 bg-purple-heart text-white rounded-sm lowercase">
          Gaming
        </li>
      </ul>
    </div>
  );
};

export default Card;
