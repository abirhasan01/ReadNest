import { footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FD] h-full px-5 sm:px-[2vw] md:px-[3vw] lg:px-[5vw]">
      <div className="md:flex md:justify-between items-center text-center md:text-start">
        <div className="flex-1">
          <img className="w-20 pb-3 pt-10 md:pt-0" src="/logo.png" alt="" />
          <p className="w-full md:max-w-md pr-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        <div className="md:flex justify-between my-10 flex-1">
          {footer_data.map((data, index) => (
            <div key={index} className="my-10 md:my-0">
              <h2 className="text-md font-semibold">{data.title}</h2>
              {data.links.map((link, index) => (
                <ul key={index}>
                  <li className="cursor-pointer hover:underline">{link}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <p className="text-center my-3">
        Copyright 2025 © ReadNest All Right Reserved.
      </p>
    </div>
  );
}

export default Footer
