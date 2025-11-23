import React from 'react'

const Pagination = ({totalPages, curPage, nextBtn, preBtn, onPageChange}) => {

    const pages = [];

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        if (curPage <= 3) {
            pages.push(1, 2, 3, "...", totalPages);
        } else if (curPage >= totalPages - 2) {
            pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, "...", curPage - 1, curPage, curPage + 1, "...", totalPages);
        }
    }

  return (
     <div className='w-full flex justify-center items-center my-8'>
        <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous" className={`w-9 md:w-12 h-9 md:h-12 aspect-square flex items-center justify-center active:scale-95 border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all ml-4 ${curPage === 1 ?  'opacity-80 cursor-not-allowed' : ''} `} onClick={preBtn}>
                <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L2 9.24242L11 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>

            <div className="flex gap-2 text-gray-500 text-sm md:text-base">
                {pages.map((page,index)=>(
                    page === "..." ? (
                        <button key={index} disabled className="w-9 md:w-12 h-9 md:h-12">...</button>
                    ): (
                        <button type="button" className={`flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square border border-gray-200 rounded-md transition-all ${page === curPage ? "bg-indigo-500 text-white" : 'bg-white hover:bg-gray-100/70'}`} onClick={()=>onPageChange(page)}>{page}</button>
                    )                
                ))}
            </div>
        
            <button type="button" aria-label="Next" className={`w-9 md:w-12 h-9 md:h-12 aspect-square flex items-center justify-center active:scale-95 border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all ml-4 ${curPage === totalPages ?  'opacity-80 cursor-not-allowed' : ''} `} onClick={nextBtn}>
                <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10 9.24242L1 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
     </div>
  )
}

export default Pagination
