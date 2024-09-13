import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';

// zustand 에서 스토어 불러오기
import usePaginationStore from '@/store/usePaginationStore';

const PaginationPage = () => {
    const { page, totalResults, pageSize, setPage } = usePaginationStore();

    // 전체 페이지 계산
    const totalPages = Math.ceil(totalResults / pageSize);

    // 페이지 변경 함수, 페이지가 변경되었을 때 페이지를 변경해 준다.
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const getPageNumbers = () => {
        // 페이지 그룹 크기 (5개씩 그룹화) 그룹당 페이지 번호 [ 1,2,3,4,5 ] , [6,7,8,9,10]
        const pageGroupSize = 5;

        // 현재 그룹 번호 계산
        const groupNumber = Math.ceil(page / pageGroupSize);

        // 현재 그룹의 시작 페이지와 끝 페이지 계산
        // 페이지 그룹을 5개씩 그룹화 했기 때문에 5페이지까지는 groupNumber -1 이 0이 된다.
        const startPage = (groupNumber - 1) * pageGroupSize + 1;
        let endPage = groupNumber * pageGroupSize;

        // endPage 가 5, 10, 15 단위로 움직이기 때문에 totalPages를 넘지 않도록 조정해야 한다.
        if (endPage > totalPages) endPage = totalPages;

        // 페이지 번호 목록을 생성한다.
        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);
        return pageNumbers;
    };
    const pageNumbers = getPageNumbers();

    return (
        <div className='mt-4'>
            <Pagination className=''>
                <PaginationContent className='flex gap-2'>
                    <PaginationItem>
                        <PaginationPrevious
                            href='#'
                            onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
                            className={`${page === 1 ? 'pointer-events-none bg-gray-100' : ''}`}
                        />
                    </PaginationItem>
                    {pageNumbers.map((pageNumber) => {
                        const isActive = pageNumber === page;
                        return (
                            <PaginationItem
                                key={pageNumber}
                                className={`rounded-md ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-200'}`}
                            >
                                <PaginationLink
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(pageNumber);
                                    }}
                                    className={`${isActive ? 'pointer-events-none' : ''}`}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}
                    {totalPages > pageNumbers[pageNumbers.length - 1] && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationNext
                            href='#'
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page < totalPages ? page + 1 : totalPages);
                            }}
                            className={`${page === totalPages ? 'pointer-events-none bg-gray-100' : ''}`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginationPage;
