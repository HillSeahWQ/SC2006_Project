import React from 'react';
import { Pagination } from '../application/customTypes';

import Arrow from '../images/arrow.svg';
import ArrowDouble from '../images/arrow_double.svg';

import styles from './PaginationBar.module.scss';

interface Props {
    pageInfo?: Pagination;
    handlePaginate: (page: number) => any;
}

const PaginationBar: React.FC<Props> = ({ pageInfo, handlePaginate }) => {

    const pageButtons: JSX.Element | HTMLDivElement | any = () => {
        if (!pageInfo) {
            return (
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </>
            )
        }

        let pages: Array<any> = [];

        if (pageInfo.lastPage <= 3) {
            for (let i = 1; i <= pageInfo.lastPage; i++) {
                pages.push(
                    <button
                        key={`to-page-${i}-short`}
                        aria-label={`navigate to page ${i} of results`}
                        onClick={() => handlePaginate(i)}
                        disabled={ pageInfo.currentPage === i ? true : false }
                    >
                        {i}
                    </button>
                )
            }
        } else { 
            if (pageInfo.currentPage === 1) {
                for (let i = 1; i <= 3; i++) {
                    pages.push(
                        <button
                            key={`to-page-${i}`}
                            aria-label={`navigate to page ${i} of results`}
                            onClick={() => handlePaginate(i)}
                            disabled={ pageInfo.currentPage === i ? true : false }
                        >
                            {i}
                        </button>
                    )
                }
            } else if (pageInfo.currentPage !== pageInfo.lastPage) {
                pages.push(
                    <button
                        key={`page-back`}
                        aria-label={`navigate to page ${pageInfo.currentPage - 1} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage - 1)}
                        disabled={ pageInfo.currentPage === pageInfo.currentPage - 1 ? true : false }
                    >
                        {pageInfo.currentPage - 1}
                    </button>,
                    <button
                        key={`current-page`}
                        aria-label={`navigate to page ${pageInfo.currentPage} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage)}
                        disabled={ true }
                    >
                        {pageInfo.currentPage}
                    </button>,
                    <button
                        key={`page-next`}
                        aria-label={`navigate to page ${pageInfo.currentPage + 1} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage + 1)}
                        disabled={ pageInfo.currentPage === pageInfo.currentPage + 1 ? true : false }
                    >
                        {pageInfo.currentPage + 1}
                    </button>
                )
            } else {
                pages.push(
                    <button
                        key={`page-back-2`}
                        aria-label={`navigate to page ${pageInfo.currentPage - 2} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage - 2)}
                        disabled={ pageInfo.currentPage === pageInfo.currentPage - 2 ? true : false }
                    >
                        {pageInfo.currentPage - 2}
                    </button>,
                    <button
                        key={`page-back-1`}
                        aria-label={`navigate to page ${pageInfo.currentPage - 1} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage - 1)}
                        disabled={ pageInfo.currentPage === pageInfo.currentPage - 1 ? true : false }
                    >
                        {pageInfo.currentPage - 1}
                    </button>,
                    <button
                        key={`page-last`}
                        aria-label={`navigate to page ${pageInfo.currentPage} of results`}
                        onClick={() => handlePaginate(pageInfo.currentPage)}
                        disabled={ pageInfo.currentPage === pageInfo.lastPage ? true : false }
                    >
                        {pageInfo.currentPage}
                    </button>
                )
            }
        }

        return pages;
    };

    return (
        <div className={styles.bar}>
            {
                !pageInfo || pageInfo?.currentPage === 1 ? (
                    null
                ) : (
                    <>
                        <button
                            aria-label="navigate to first page of results"
                            onClick={() => handlePaginate(1)}
                        >
                            <img 
                                src={ArrowDouble}
                                alt=""
                                aria-hidden="true"
                                className={styles.skip_first}
                            />
                        </button>

                        <button
                            aria-label="navigate back one page of results"
                            onClick={() => handlePaginate((pageInfo.currentPage - 1))}
                        >
                            <img 
                                src={Arrow}
                                alt=""
                                aria-hidden="true"
                                className={styles.arrow_back}
                            />
                        </button>
                    </>
                )
            }

            { pageButtons() }

            {
                !pageInfo || pageInfo?.currentPage === pageInfo?.lastPage ? (
                    null
                ) : (
                    <>
                        <button
                            aria-label="navigate to next page of results"
                            onClick={() => handlePaginate((pageInfo.currentPage + 1))}
                        >
                            <img 
                                src={Arrow}
                                alt=""
                                aria-hidden="true"
                                className={styles.arrow_next}
                            />
                        </button>

                        <button
                            aria-label="navigate to final page of results"
                            onClick={() => handlePaginate(pageInfo.lastPage)}
                        >
                            <img 
                                src={ArrowDouble}
                                alt=""
                                aria-hidden="true"
                                className={styles.skip_last}
                            />
                        </button>
                    </>
                )
            }
        </div>
    )
};

export default PaginationBar;