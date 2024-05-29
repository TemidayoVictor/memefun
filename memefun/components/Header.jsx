import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="bg-[#171621] flex justify-between items-center p-2 rounded-[5px]">
            
            <div>
                <div className="flex items-center gap-2">
                    <div className="border border-[#feca0c] rounded-[50%] h-4 w-4 bg-[#332802]"></div>
                    <h3 className="">Live</h3>
                    <FontAwesomeIcon icon={faArrowRight} className="text-[1em]" />
                </div>
            </div>

            <div className="flex justify-between gap-3">
                <div className="flex gap-2 border-r border-[grey] pr-2">
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]" />
                    <p>Bought 0.0015 Eth of Caps</p>
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]"/>
                </div>

                <div className="flex gap-2 border-r border-[grey] pr-2">
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]" />
                    <p>Bought 0.0015 Eth of Caps</p>
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]"/>
                </div>

                <div className="flex gap-2 pr-2">
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]" />
                    <p>Bought 0.0015 Eth of Caps</p>
                    <img src="/image1.jpg" alt="token Logo" className="w-[25px] rounded-[50%]"/>
                </div>
            </div>

            <div className="">
                <button className="border border-[#feca0c] rounded-[.2em] bg-[#332802] p-1">Connect</button>
            </div>
        </div>
    )
}

export default Header