import '../styles/noPages.css'

export const NoPages = ({pages=0, onChangePage, nextPage, previousPage }) => {
    let arrPages=[];
    for(let i =1; i<=pages; i++){
        if(i>10){
            break;
        }
        arrPages.push(i);
    }
  return (
    <>
    <ul className='pages'>
        <li onClick={previousPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
        </li>
        {
            arrPages.map(numPage=>{
                return(
                    <li key={numPage} className={numPage} onClick={()=>{onChangePage(numPage)}}>{numPage}</li>
                )
            })
        }
        <li onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </li>
    </ul>
    </>
  )
}
