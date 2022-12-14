import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {

    //AUTH
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect()

    //--

    console.log(address)



    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            {/* Left */}
            <div className='lg:col-span-4 bg-gradient-to-br from-orange-500 to-green-500'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-blue-800 to-white p-2 rounded-xl'>
                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://cdn.discordapp.com/attachments/1008571154392436826/1017142607031308299/kkjui_gandhi_on_india_9968e571-5efc-4df9-926f-a4457f12ef3f.png" alt="" />
                    </div>
                    <div className='text-center p-5 space-y-2'>
                        <h1 className='text-4xl font-bold text-white'>Gandhi's NFT</h1>
                        <h2 className='text-white'>A collection of NFT on Gandhi.</h2>
                        <p className='text-white bg-purple-700 rounded-full p-3' >Proudly made by <a href='https://fastidious-choux-d70553.netlify.app/'>Preet Panchal with ❤️</a></p>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
                {/* Header */}
                <header className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                        The{' '}
                        <span className='font-extrabold underline decoration-green-600/50'>
                            Preet Panchal
                        </span>{' '}
                        NFT Marketplace
                    </h1>
                    <button onClick={() => (address ? disconnect() : connectWithMetamask())}
                        className='rounded-full bg-green-800 text-white px-4 py-2 text-xs
                    lg:px-5 lg:py-3 lg:text-base'>
                        {address ? 'Sign Out' : 'Sign In'}
                    </button>

                </header>

                <hr className='my-2 border' />
                {address && (
                    <p className='text-center text-sm text-rose-400'>Your logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                )}

                {/* Content */}
                <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
                    <img className='w-80 object-cover pb-10 lg:h-40'
                        src="https://links.papareact.com/bdy" alt="" />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
                        The PREET ape coding club
                    </h1>

                    <p className='pt-2 text-xl text-green-600'>13 / 21 NFT's claimed</p>
                </div>

                {/* Mint Button */}
                <button className='mt-10 h-16 bg-red-600 w-full text-white rounded-full font-bold'>
                    Mint NFT(0.01 ETH)
                </button>

            </div>
        </div>
    )
}

export default NFTDropPage