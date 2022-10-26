import Link from "next/link";

export default function Header() {
  return (
    <header className="min-w-screen w-full bg-gradient-to-r from-purple-900 to-violet-500 md:h-[160px] md:rounded-bl-[100px]">
      <div className="mx-auto flex h-[200px] max-w-screen-2xl flex-col items-center justify-between px-6 md:h-[160px] md:flex-row md:items-center md:rounded-bl-[100px] md:px-10 lg:px-[165px] xl:px-[100px]">
        <Link href="/">
          <h3 className="mt-6 text-3xl font-bold capitalize text-white md:mt-0">
            Web3 Philippines Directory
          </h3>
        </Link>
        <Link href="https://forms.gle/8BUfE2A7NRtqYbm66">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-hearts mb-6 self-end rounded-2xl border-2 px-5 py-3 font-bold text-white hover:opacity-75 md:mb-0 md:self-center"
          >
            Submit project
          </a>
        </Link>
      </div>
    </header>
  );
}
