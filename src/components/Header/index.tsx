import { Bag, Heart, MagnifyingGlass, UserCircle} from 'phosphor-react'


export function Header() {
    return (
        <><header className="bg-[#1c1c1c] p-5">
            <div className="flex flex-row  ">
                <h1 className="flex-1 font-bold  text-2xl mx-10">DISCOVER<span className='text-[#be4cca]'>GAMES</span></h1>

                <input className="flex-auto w-1 bg-[#232426] rounded-md p-2 " placeholder="Search Games..." type="text" />

                <div className="flex flex-row mx-24">
                    <UserCircle size={25} />
                    <Heart className="mx-4" size={25} />
                    <Bag size={25} />
                </div>




            </div>

        </header>
            <div className='flex justify-center text-lg font-medium mt-6 mb-6'>
                <a className="px-2" href="">Home</a>
                <a className="px-2" href="">Store</a>
                <a className="px-2" href="">Promoção</a>
                <a className="px-2" href="">Pre-venda</a>
            </div>
            </>
    )
}