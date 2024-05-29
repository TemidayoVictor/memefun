import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const HomeSlider = () => {
    return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <div className="flex items-center justify-center relative">
                <div className="bg-[#171621] p-6 rounded-[.5em] border-2 border-[#feca0c] w-[40%]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />
        
                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1.3rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[1rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[1rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[1rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 items-center">
                                <p className="text-[#6ebdfe] text-[1rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] h-[20px] rounded-[50%]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-5 justify-between">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faGlobe} className="text-[1.2em]"/>
                            <FontAwesomeIcon icon={faTelegram} className="text-[1.2em]"/>
                            <FontAwesomeIcon icon={faXTwitter} className="text-[1.2em]"/>
                        </div>
                        <div>
                            <img 
                                src="/base.svg"
                                alt="base Logo"
                                className="h-5 w-5 rounded-[50%]"
                            />
                        </div>
                    </div>
    
                </div>
                <div className="absolute top-[-8%] left-[28%] border-2 border-[#feca0c] rounded-[50%] h-[50px] w-[50px] bg-[#332802] flex items-center justify-center">
                    <img 
                        src="/logo.png"
                        alt="token Logo"
                        className="rounded-[50%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSlider