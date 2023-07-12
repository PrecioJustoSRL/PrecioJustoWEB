'use client';

export default function Button({ theme, styled, click, children }) {

    switch (theme) {
        case 'Transparent':
            return <button
                type="submit"
                className="text-white bg-transparent border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-3 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Primary':
            return <button
                type="submit"
                className="text-white bg-blue-600 border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-3 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Secondary':
            return <button
                type="submit"
                className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-3 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'Success':
            return <button
                type="submit"
                className="text-white bg-emerald-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-4 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'SuccessBuy':
            return <button
                type="submit"
                className="text-white bg-emerald-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-4 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[18px] w-[18px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM512 884C306.6 884 140 717.4 140 512C140 306.6 306.6 140 512 140C717.4 140 884 306.6 884 512C884 717.4 717.4 884 512 884ZM559.7 488.8L534.3 482.9V348.6C572.3 353.8 595.8 377.6 599.8 406.8C600.3 410.8 603.7 413.7 607.7 413.7H652.6C657.3 413.7 661 409.6 660.6 404.9C654.5 342.6 603.2 302.6 534.7 295.7V263C534.7 258.6 531.1 255 526.7 255H498.6C494.2 255 490.6 258.6 490.6 263V296C419.8 302.9 364.4 342 364.4 415C364.4 482.6 414.2 515.2 466.5 527.7L491.2 534V676.7C447 670.8 422.2 647.2 417.1 615.4C416.5 611.6 413.1 608.8 409.2 608.8H363C358.3 608.8 354.6 612.8 355 617.5C359.5 672.5 401.2 723.1 490.2 729.6V761C490.2 765.4 493.8 769 498.2 769H526.6C531 769 534.6 765.4 534.6 760.9L534.4 729.2C612.7 722.3 668.7 680.4 668.7 605.2C668.6 535.8 624.5 504.8 559.7 488.8ZM491.1 472.6C485.5 471 480.8 469.5 476.1 467.6C442.3 455.4 426.6 435.7 426.6 410.3C426.6 374 454.1 353.3 491.1 348.6V472.6ZM534.3 677V543.3C537.4 544.2 540.2 544.9 543.1 545.5C590.4 559.9 606.3 579.9 606.3 610.6C606.3 649.7 576.9 673.2 534.3 677Z" fill="white" />
                </svg>
                {children}
            </button>
        case 'Danger':
            return <button
                type="submit"
                className="text-white bg-red-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-4 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'Disable':
            return <button
                type="submit"
                className="text-white bg-gray-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-4 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniPrimary':
            return <button
                type="submit"
                className="text-white bg-[#0064FA] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'MiniPrimaryComprar':
            return <button
                type="submit"
                className="relative text-white bg-[#0064FA] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2  text-center z-30"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[18px] w-[18px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.875 29.1125V26.5H11.7875L13.325 23.8875L36.9 21.75L41 7.5H9.48125L7.6875 0.375H0V2.75H5.6375L11.0188 22.7L7.6875 28.875V32.4375C7.6875 34.3375 9.48125 36 11.5312 36C13.5813 36 15.375 34.3375 15.375 32.4375C15.375 30.5375 13.5813 28.875 11.5312 28.875H30.75V32.4375C30.75 34.3375 32.5437 36 34.5938 36C36.6438 36 38.4375 34.3375 38.4375 32.4375C38.4375 30.775 37.4125 29.5875 35.875 29.1125Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniPrimaryInfo':
            return <button
                type="submit"
                className="relative text-white bg-[#0064FA] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2  text-center z-30"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[20px] w-[20px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniSecondary':
            return <button
                type="submit"
                className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'MiniSuccess':
            return <button
                type="submit"
                className="text-white bg-emerald-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniSuccessRecetar':
            return <button
                type="submit"
                className="text-white bg-emerald-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full px-2 py-2 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >

                <svg className='inline mr-3 h-[18px] w-[18px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="white" />
                    <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="white" />
                </svg>
                {children}
            </button>
        default:

    }
}

