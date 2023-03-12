import { Box } from 'utils/Box';
import { PaginateList, ButtonNext, ButtonPrev } from './Pagination.styled';

const Pagination = ({ actualPage, totalPage, page }) => {
  const handlePageClick = event => {
    actualPage(event.selected + 1);
    localStorage.setItem('page', event.selected + 1);
  };

  return (
    <Box mt={6}>
      <PaginateList
        breakLabel="..."
        nextLabel={<ButtonNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={totalPage}
        previousLabel={<ButtonPrev />}
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </Box>
  );
};

export default Pagination;
