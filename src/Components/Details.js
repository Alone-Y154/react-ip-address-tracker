export const Details = (props) => {
    const { data } = props;

    return (
        <div className="flex justify-center mt-[-130px] lg:mt-[-84px] relative">
            <div className="items-center lg:p-6 text-center px-8 gap-8 lg:gap-3 flex w-[1110px] z-20 lg:w-[327px] lg:flex-col lg:h-[294px] h-[161px] rounded-[15px] bg-white shadow-[0px_50px_50px_-25px_rgba(0, 0, 0, 0.10)] ">
                <div className="ip-address flex flex-col gap-[13px] lg:gap-[7px] w-[213px]">
                    <p className="text-[#2C2C2C] text-xs lg:text-[10px]  font-bold tracking-[1.75px] uppercase opacity-50">IP Address</p>
                    <p className="text-[#2C2C2C] text-[26px] lg:text-[20px] font-medium tracking-[-0.232px] leading-[30px]">{ data.ip} </p>
                </div>

                <div className="divider w-[1px] lg:hidden h-[75px] opacity-[0.15] bg-black">

                </div>

                <div className="ip-address flex flex-col gap-[13px] lg:gap-[7px] w-[213px]">
                    <p className="text-[#2C2C2C] text-xs lg:text-[10px] font-bold tracking-[1.75px] uppercase opacity-50">Location</p>
                    <p className="text-[#2C2C2C] text-[26px] lg:text-[20px] font-medium tracking-[-0.232px] leading-[30px]"> {data?.location?.region}</p>
                </div>

                <div className="divider lg:hidden  w-[1px] h-[75px] opacity-[0.15] bg-black">

                </div>

                <div className="ip-address flex flex-col gap-[13px] lg:gap-[7px] w-[213px]">
                    <p className="text-[#2C2C2C] text-xs lg:text-[10px] font-bold tracking-[1.75px] uppercase opacity-50">Timezone</p>
                    <p className="text-[#2C2C2C] text-[26px] lg:text-[20px] font-medium tracking-[-0.232px] leading-[30px]">UTC {data.location?.timezone}</p>
                </div>


                <div className="divider lg:hidden w-[1px] h-[75px] opacity-[0.15] bg-black">

                </div>



                <div className="ip-address flex flex-col gap-[13px] lg:gap-[7px] w-[213px]">
                    <p className="text-[#2C2C2C] text-xs lg:text-[10px] font-bold tracking-[1.75px] uppercase opacity-50">ISP</p>
                    <p className="text-[#2C2C2C] text-[26px] lg:text-[20px] font-medium tracking-[-0.232px] leading-[30px]">{data.isp}</p>
                </div>
            </div>
        </div>
    )
}