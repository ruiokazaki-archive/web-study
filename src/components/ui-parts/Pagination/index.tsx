import { Flex } from '@chakra-ui/react';
import { VFC } from 'react';

import Circle from 'components/ui-elements/PaginationCircle';

type Props = {
  totalBlogCount: number;
  currentPageNumber?: number;
  displayArticleCount?: number;
};

const Pagination: VFC<Props> = ({
  totalBlogCount,
  currentPageNumber = 1,
  displayArticleCount = 12,
}) => {
  /**
   * ページネーションの表示状態を評価する関数
   * @date 2022-06-09
   * @param { number} _paginationNumber
   * @param { number} _currentPageNumber
   * @returns { 'few' | 'leftOrRight' | 'middle'}
   */
  const displayStateDecision = (
    _paginationNumber: number,
    _currentPageNumber: number,
  ): 'few' | 'leftOrRight' | 'middle' => {
    if (_paginationNumber <= 7) return 'few';
    if (
      _currentPageNumber <= 3 ||
      _currentPageNumber >= _paginationNumber - 2
    ) {
      return 'leftOrRight';
    }

    return 'middle';
  };

  /**
   * 表示件数と記事数からページ数を割り出す関数
   * @date 2022-06-09
   * @param { number} _totalBlogCount
   * @param { number} _displayArticleCount
   */
  const pagigationCount = (
    _totalBlogCount: number,
    _displayArticleCount: number,
  ) => Math.ceil(_totalBlogCount / _displayArticleCount);

  /**
   * 表示件数と記事数からページ数分の配列を作成する関数
   * @date 2022-06-09
   * @param { number} _totalBlogCount
   * @param { number} _displayArticleCount
   * @returns { number[]}
   */
  const generatingPaginationNumberArray = (
    _totalBlogCount: number,
    _displayArticleCount: number,
  ): number[] =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    [...new Array(pagigationCount(_totalBlogCount, _displayArticleCount))]
      .fill(0)
      .map((_, index) => index + 1);

  const paginationNumberArray = generatingPaginationNumberArray(
    totalBlogCount,
    displayArticleCount,
  );
  const displayState = displayStateDecision(
    paginationNumberArray.length,
    currentPageNumber,
  );

  return (
    <Flex w="fit-content" gap="8px">
      {displayState === 'few' &&
        paginationNumberArray.map((paginationNumber) => (
          <Circle
            pageNumber={paginationNumber}
            key={paginationNumber}
            currentPage={currentPageNumber === paginationNumber}
          >
            {paginationNumber}
          </Circle>
        ))}
      {displayState === 'middle' && (
        <>
          <Circle pageNumber={0}>{paginationNumberArray[0]}</Circle>
          <Circle pageNumber={currentPageNumber}>...</Circle>
          {paginationNumberArray
            .slice(currentPageNumber - 2, currentPageNumber + 1)
            .map((paginationNumber) => (
              <Circle
                pageNumber={paginationNumber}
                key={paginationNumber}
                currentPage={currentPageNumber === paginationNumber}
              >
                {paginationNumber}
              </Circle>
            ))}
          <Circle pageNumber={currentPageNumber}>...</Circle>
          <Circle pageNumber={paginationNumberArray.length - 1}>
            {paginationNumberArray[paginationNumberArray.length - 1]}
          </Circle>
        </>
      )}
      {displayState === 'leftOrRight' && (
        <>
          {currentPageNumber <= 3 && (
            <>
              {paginationNumberArray.slice(0, 5).map((paginationNumber) => (
                <Circle
                  pageNumber={paginationNumber}
                  key={paginationNumber}
                  currentPage={currentPageNumber === paginationNumber}
                >
                  {paginationNumber}
                </Circle>
              ))}
              <Circle pageNumber={currentPageNumber}>...</Circle>
              <Circle pageNumber={paginationNumberArray.length - 1}>
                {paginationNumberArray[paginationNumberArray.length - 1]}
              </Circle>
            </>
          )}
          {currentPageNumber >= paginationNumberArray.length - 2 && (
            <>
              <Circle pageNumber={0}>{paginationNumberArray[0]}</Circle>
              <Circle pageNumber={currentPageNumber}>...</Circle>
              {paginationNumberArray.slice(-5).map((paginationNumber) => (
                <Circle
                  pageNumber={paginationNumber}
                  key={paginationNumber}
                  currentPage={currentPageNumber === paginationNumber}
                >
                  {paginationNumber}
                </Circle>
              ))}
            </>
          )}
        </>
      )}
    </Flex>
  );
};
export default Pagination;
