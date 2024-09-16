import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header-top-icon-wrapper">
              <BsFacebook/>
            </div>
            <div className="header-top-icon-wrapper">
              <BsTwitter/>
            </div>
            <div className="header-top-icon-wrapper">
              <BsInstagram/>
            </div>
            <div className="header-top-icon-wrapper">
              <BsLinkedin/>
            </div>
          </div>
          {/* after icons */}
          <div className="text-grey-500 text-[12px] ">
            <b>FREE SHIPPING</b>THIS WEEK ORDER  $-55
          </div>
          <div className="flex gap-4">
            <select 
            name="currency"
            id="currency"
            className="text-green-500 text-[12px] w-[70px]">
              <option value="USD $">USD $</option>
              <option value="USD $">EUR $</option>
              <option value="USD $">EVC$</option>

               
            </select>
            <select 
            name="currency"
            id="currency"
            className="text-green-500 text-[12px] w-[70px]">
              <option value="USD $">English</option>
              <option value="USD $">French</option>
              <option value="USD $">Somali</option>

               
            </select>


          </div>

        </div>
      </div>

    </div>
  )
}

export default HeaderTop 