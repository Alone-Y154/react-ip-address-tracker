export const Search = (props) => {
    return(
        <div className="flex justify-center lg:mb-6 lg:h-[327px] h-[35vh] w-full mb-12">
        <div className="ip-search w-full items-center bg-no-repeat bg-cover bg-[url('../public/images/pattern-bg-desktop.png')] lg:bg-[url('../public/images/pattern-bg-mobile.png')] flex flex-col">
            <div className="search-heading text-white text-[32px] lg:text-[26px] font-medium tracking-[-0.286px] leading-[30px] mt-10 mb-8">
                <p>IP Address Tracker</p>
            </div>

            <div className="flex flex-col lg:w-[327px] w-[555px] h-[58px] rounded-[15px] bg-white justify-center shadow-[0px_50px_50px_-25px_rgba(0, 0, 0, 0.10)] ">
                <form className="flex justify-between items-center" onSubmit={props.handleSubmit}>
                    <input className="h-10 w-full ml-2 outline-none pl-4 text-[#2C2C2C] text-lg font-normal placeholder:opacity-50" type="text" placeholder="Search for any IP address"/>
                    <button type="submit" className="w-[58px] h-[58px] bg-black flex items-center justify-center rounded-r-[15px]"><img src="./images/icon-arrow.svg" alt="arrow"/></button>
                </form>
            </div>
        </div>

        </div>
    )
}