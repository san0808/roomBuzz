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
                            <div className='border-b-[3px] border-b-stone-300 h-7 flex items-center justify-center'>
                                Room
                            </div>
                            <div className='h-16 flex items-center justify-center'>MON</div>
                            <div className='h-16 flex items-center justify-center'>TUE</div>
                            <div className='h-16 flex items-center justify-center'>WED</div>
                            <div className='h-16 flex items-center justify-center'>THU</div>
                            <div className='h-16 flex items-center justify-center'>FRI</div>
                            <div className='h-16 flex items-center justify-center'>SAT</div>
                        </div>
                        <div className='relative w-full px-1 grid grid-cols-1  divide-stone-300 divide-y-2'>
                            <div className='flex w-full justify-between border-b-[3px] border-b-stone-300 h-7'>
                                <span> 9am </span> <span> 10am </span> <span> 11am </span>
                                <span> 12am </span>
                                <span> 1pm </span> <span> 2pm </span> <span> 3pm </span>
                                <span> 4pm </span>
                                <span> 5pm </span> <span> 6pm </span>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className='bg-[#d8dd81] rounded-md w-5/12 h-full'></div>
                                <div className=' bg-[#707274] rounded-md w-3/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className='bg-[#9cbbd9] rounded-md w-5/12 h-full'></div>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                                <div className=' bg-[#b3ea54] rounded-md w-3/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className=' bg-[#91c7a2] rounded-md w-3/12 h-full'></div>
                                <div className='bg-[#9cbbd9] rounded-md w-5/12 h-full'></div>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className='bg-[#9cbbd9] rounded-md w-5/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                                <div className=' bg-[#707274] rounded-md w-3/12 h-full'></div>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className='bg-[#67ca9c] rounded-md w-1/12 h-full'></div>
                                <div className=' bg-[#707274] rounded-md w-3/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                                <div className='bg-[#9cbbd9] rounded-md w-5/12 h-full'></div>
                            </div>
                            <div className='h-16 py-1 flex flex-row gap-2'>
                                <div className='bg-[#ce6e9d] rounded-md w-5/12 h-full'></div>
                                <div className='bg-[#9fa7b2] rounded-md w-1/12 h-full'></div>
                                <div className=' bg-transparent rounded-md w-3/12 h-full'></div>
                                <div className=' bg-[#65a177] rounded-md w-3/12 h-full'></div>
                            </div>
                            <div className='absolute left-[20%] top-[-1rem] w-4 h-[calc(100%+1rem)] opacity-50 divide-none'>
                                <div className='w-full h-0 pt-[100%] rounded-full bg-red-900'></div>
                                <div className=' absolute top-0 left-[50%] translate-x-[-50%] w-1/4 rounded-full h-full  bg-red-900'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeTable;
