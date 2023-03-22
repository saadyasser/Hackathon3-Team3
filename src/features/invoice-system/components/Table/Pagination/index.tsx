import React from 'react';
const Pagination = ({ items, pageSize, offset, onPageChange }:any)=>{
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   console.log(pages);

    return(
        <div>
     <ul className="">
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === offset ?" styles.pageItemActive" : "styles.pageItem"
           }
         >
           <a className="" onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
    )
}
export default Pagination;