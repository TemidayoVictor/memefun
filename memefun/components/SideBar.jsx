'use client'
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBars, faWallet, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
    return(
        <div className="w-[20%] h-[100vh] bg-[#161721] fixed">
            <div>
                <div className="flex align-center border-b border-[grey] p-[1.8em] pt-[1.5em]">
                    <Image 
                        src="/logo.png"
                        alt="Memefun Logo"
                        width={30}
                        height={30}
                    />
                    <h1 className="text-xl font-bold text-[white] ml-[.5em]">
                        MEMEFUN
                    </h1>
                </div>

                <div className="flex flex-col justify-between ">
                    <div>
                        <div className="flex items-center p-[1.8em] pt-[1.5em]">
                            <FontAwesomeIcon icon={faBars} className="text-[1.3em]"/>
                            <h3 className="ml-[1em]">New Pairs</h3>
                        </div>
                        <div className="flex items-center p-[1.8em] pt-[1.5em]">
                            <FontAwesomeIcon icon={faWallet} className="text-[1.3em]" />
                            <h3 className="ml-[1em]">My Apes</h3>
                        </div>
                        <div className="flex items-center p-[1.8em] pt-[1.5em]">
                            <FontAwesomeIcon icon={faServer} className="text-[1.3em]" />
                            <h3 className="ml-[1em]">Token Deployer</h3>
                        </div>
                    </div>

                    <div className="p-[1.8em]">
                        <div>
                            <select name="" id="" className="w-[100%] mb-[.5em] bg-[transparent] border border-[grey] rounded-[.2em]">
                                <option value=""></option>
                            </select>
                            <input type="submit" value="Tutorial" className="w-[100%] border border-[#feca0c] rounded-[.2em] bg-[#332802]"/>
                        </div>

                        <div className="flex justify-between mt-[1rem]">
                            <FontAwesomeIcon icon={faTelegram} className="text-[1.3em]" />
                            <FontAwesomeIcon icon={faGlobe} className="text-[1.3em]" />
                            <FontAwesomeIcon icon={faXTwitter} className="text-[1.3em]" />
                            <FontAwesomeIcon icon={faPhone} className="text-[1.3em]" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SideBar