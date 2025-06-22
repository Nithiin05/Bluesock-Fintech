import React from 'react';
import NavItem from './NavItem';

const Header = () => {
  const navItems = [
    { text: 'IPO', link: '#' },
    { text: 'COMMUNITY', link: '#' },
    { text: 'PRODUCTS', link: '#', hasDropdown: true },
    { text: 'BROKERS', link: '#', hasDropdown: true },
    { text: 'LIVE NEWS', link: '#', isNew: true },
  ];

  return (
    <header className="self-stretch px-20 py-7 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-6 text-5xl font-bold whitespace-nowrap text-stone-900 max-md:mt-10 max-md:text-4xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d50b143311d4415255590ca4b256b71092bb1b8215802e893923bae871374bc9?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec" alt="" className="object-contain shrink-0 my-auto aspect-[1.89] w-[85px]" />
            <div className="flex-auto w-[242px] max-md:text-4xl">BLUESTOCK</div>
          </div>
        </div>
        <nav className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
          <ul className="flex flex-wrap gap-5 justify-between items-start self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </ul>
        </nav>
        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-9 items-center self-stretch my-auto text-base font-semibold max-md:mt-10">
            <a href="#" className="self-stretch my-auto text-neutral-400">Sign In</a>
            <a href="#" className="self-stretch px-9 py-2.5 text-white bg-indigo-600 rounded-md max-md:px-5">Sign Up Now</a>
            <button aria-label="User menu" className="bg-transparent border-0 cursor-pointer">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c833bcf66c5a1c0c87a13f6d82356c602f42eb2dd00f7341b30e6265ca0775?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
