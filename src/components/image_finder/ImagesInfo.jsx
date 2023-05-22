import { useEffect, useState } from 'react';
import { FetchFunction } from './FetchFunction';
import { OneCard } from './card/OneCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONTAINER_UL, BUTTON, SPIN } from './styled/ImagesInfo.styled';

export const ImagesInfo = ({ resValue }) => {
  const [searchValue, setSearchValue] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchValue(resValue);
    if (searchValue === '') {
      setPage(1);
      return;
    } else if (searchValue !== resValue) {
      setHits([]);
      setPage(1);
      return;
    }
    setLoading(true);
    FetchFunction(searchValue, page)
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if (res.hits.length === 0) {
          toast.error(`За запитом "${searchValue}" зображень не знайдено. `, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
        if (res.hits.length > 1) {
          setHits(prevHits => [...prevHits, ...res.hits]);
          toast.success(
            `За пошуком "${searchValue}" знайдено ${res.totalHits} зображень`,
            {
              position: 'bottom-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            }
          );
        }
      })
      .catch(error => console.error(error));
  }, [searchValue, page, resValue, setHits, setSearchValue]);

  return (
    hits.length > 0 && (
      <>
        <CONTAINER_UL>
          {hits.map(
            ({
              id,
              previewURL,
              likes,
              user,
              downloads,
              tags,
              largeImageURL,
            }) => {
              return (
                <li key={id}>
                  {OneCard(
                    largeImageURL,
                    previewURL,
                    user,
                    likes,
                    downloads,
                    tags
                  )}
                </li>
              );
            }
          )}
        </CONTAINER_UL>
        {loading && <SPIN></SPIN>}
        {hits.length > 19 && (
          <BUTTON
            onClick={() => {
              setPage(page + 1);
            }}
          >
            More
          </BUTTON>
        )}

        <ToastContainer />
      </>
    )
  );
};

// export class ImagesInfo extends Component {
//   state = {
//     hits: null,
//     page: 1,
//     loading: false,
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     const { page } = this.state;
//     const prevVal = prevProps.resValue;
//     const currentVal = this.props.resValue;
//     const prevPage = prevState.page;

//     if (prevVal !== currentVal) {
//       this.setState({ loading: true });
//       FetchFunction(currentVal, page)
//         .then(res => res.json())
//         .then(res => {
//           const { hits } = res;

//           if (hits.length === 0) {
//             this.setState({ loading: false });
//             toast.error(`За запитом "${currentVal}" зображень не знайдено. `, {
//               position: 'bottom-right',
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: 'dark',
//             });
//           } else {
//             this.setState({ loading: false });
//             this.setState({ hits: hits });
//             toast.success(
//               `За пошуком "${currentVal}" знайдено ${res.totalHits} зображень`,
//               {
//                 position: 'bottom-right',
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: 'colored',
//               }
//             );
//           }
//         })
//         .catch(error => console.error(error));
//     }

//     if (prevPage !== page) {
//       this.setState({ loading: true });
//       FetchFunction(currentVal, page)
//         .then(res => res.json())
//         .then(res => {
//           this.setState({ loading: false });
//           const { hits } = res;
//           this.setState({ hits: this.state.hits.concat(hits) });
//           return;
//         })
//         .catch(error => console.error(error));
//     }
//   };

//   render() {
//     const { hits, loading } = this.state;
//     return (
//       hits && (
//         <>
//           <CONTAINER_UL>
//             {hits.map(
//               ({
//                 id,
//                 previewURL,
//                 likes,
//                 user,
//                 downloads,
//                 tags,
//                 largeImageURL,
//               }) => {
//                 return (
//                   <li key={id}>
//                     {OneCard(
//                       largeImageURL,
//                       previewURL,
//                       user,
//                       likes,
//                       downloads,
//                       tags
//                     )}
//                   </li>
//                 );
//               }
//             )}
//             {loading && <SPIN></SPIN>}
//           </CONTAINER_UL>
//           {hits.length > 19 && (
//             <BUTTON
//               onClick={() => this.setState({ page: this.state.page + 1 })}
//             >
//               More
//             </BUTTON>
//           )}

//           <ToastContainer />
//         </>
//       )
//     );
//   }
// }
