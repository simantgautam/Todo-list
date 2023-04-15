function Pagination({ currentPage, pageSize, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageClick = (newPage) => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          style={{ marginRight: "20px" }}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination" style={{ display: "flex" }}>
      {currentPage > 1 && (
        <button onClick={() => handlePageClick(currentPage - 1)}>Prev</button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
      )}
    </div>
  );
}

export default Pagination;
