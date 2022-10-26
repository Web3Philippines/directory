export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <p className="mb-[20px] text-center text-base leading-6 text-neutral-light md:mb-[10px] md:text-left">
          🖥️💖☕ by&nbsp;
          <a
            className="hover:underline"
            href="https://web3philippines.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3 Philippines
          </a>{" "}
          &amp;{" "}
          <a
            className="hover:underline"
            href="https://wareneutron.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wareneutron Developers
          </a>
        </p>
        <p className="mb-[20px] text-center text-base leading-6 text-neutral-light md:mb-[70px] md:text-left">
          Directory {""}
          <a
            className="hover:underline"
            href="https://github.com/web3phl/directory/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            v1.2.0
          </a>
        </p>
      </div>
    </footer>
  );
}
