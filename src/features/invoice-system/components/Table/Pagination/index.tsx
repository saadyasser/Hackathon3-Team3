import React,{useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,setData }:any) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setData();
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setData();
  };
  return (
    <nav>
      <ul className='pagination text-center m-auto'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
            {currentPage > 0 && <span className='p-2' onClick={handlePrevPage} >&#8826;</span>}
              page 

              {number}
             <span className='p-2' onClick={handleNextPage} > &#8827;</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;