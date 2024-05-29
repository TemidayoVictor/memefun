import React from "react";
import Header from "./Header";
import HomeSlider from "./HomeSlider";
import Pairs from "./Pairs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
    return(
        <div>
            <Header></Header>
            <HomeSlider></HomeSlider>
            <Pairs></Pairs>
            <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-6 my-[1em] mt-5">
                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                <div className="bg-[#171621] p-2 border border-transparent rounded-[.5em] hover:border hover:border-[#feca0c]">
                    
                    <div className="flex justify-between">
                        <img 
                            src="/image1.jpg"
                            alt="token Logo"
                            className="w-[30%] rounded-[5px]"
                        />

                        <div className="w-[66%]">
                            <h2 className="font-bold text-[1rem]">SR4T</h2>
                            <p className="text-[#2db99f] text-[.8rem]">Market Cap: $7k</p>
                            <p className="text-[#74879d] text-[.8rem]">replies: 0</p>
                            <p className="text-[#74879d] text-[.8rem]">SwipeRight4Trump</p>
                            <div className="flex gap-3 mt-1">
                                <p className="text-[#6ebdfe] text-[.8rem]">Deployed by:</p>
                                <img 
                                    src="/image1.jpg"
                                    alt="token Logo"
                                    className="w-[20px] rounded-[50%]"
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

                          
            </div>
        </div>
    )
}

export default Main