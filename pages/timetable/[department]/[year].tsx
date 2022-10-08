import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const TimeTable: NextPage = () => {
    const router = useRouter();
    const { department, year } = router.query;
    return (
        <>
            <Head>
                <title>
                    Timetable for {department} {3}
                </title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className='bg-[#fafafa]  m-16 p-16 shadow-main'>
                <h1 className='text-5xl leading-none mt-0 mb-1 uppercase'>
                    Time Table for {department} {3}
                </h1>
                <div className='flex flex-col gap-4 my-6'>
                    <div className='flex flex-row gap-2 divide-stone-300 divide-x-2  '>
                        <div className='grid grid-cols-1 divide-stone-300 divide-y-2 w-16'>
                            <div className='border-b-[3px] border-b-stone-300 h-7'>Room</div>
                            <div className='h-16'>N1</div>
                            <div className='h-16'>N2</div>
                            <div className='h-16'>2A</div>
                            <div className='h-16'>2B</div>
                            <div className='h-16'>2C</div>
                            <div className='h-16'>hall</div>
                        </div>
                        <div className='w-full px-1 grid grid-cols-1  divide-stone-300 divide-y-2'>
                            <div className='flex w-full justify-between border-b-[3px] border-b-stone-300 h-7'>
                                <span> 8am </span> <span> 10am </span> <span> 12am </span>
                                <span> 2pm </span> <span> 4pm </span> <span> 6pm </span>
                                <span> 8pm </span>
                            </div>
                            <div className='flex flex-row gap-2 h-16 py-1'>
                                <div className='bg-[#9cbbd9] rounded-md w-5/12 h-full'></div>
                                <div className=' bg-[#707274] rounded-md w-3/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                            </div>
                            <div className='h-16'></div>
                            <div className='h-16'></div>
                            <div className='h-16'></div>
                            <div className='h-16'></div>
                            <div className='h-16'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeTable;
