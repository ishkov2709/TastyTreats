import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function resizeVisPage() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return 2;
  }

  if (screenWidth >= 768) {
    return 3;
  }
}

function startPagination(page, perPage, totalPages, callback) {
  console.log(page, perPage, totalPages, callback);
  const options = {
    totalItems: Number(perPage) * Number(totalPages),
    itemsPerPage: Number(perPage),
    visiblePages: resizeVisPage(),
    page: Number(page),
    centerAlign: false,
    omitMiddlePages: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn pag-page pag-page-next-light">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected pag-active-light">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} move-button pag-page-move-light">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button pag-page-prev-light">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button pag-page-next-light">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', ({ page }) => {
    callback(page);
  });
}

export default startPagination;
