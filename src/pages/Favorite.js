import React, { useEffect, useState } from "react";
import axiosInstance from '../utilities/axios';
import UserCard from "../components/UserCard_2";
import Loading from "../components/Loading";
const Favorite = () => {
  const [data, setData] = useState(() => [])
  const [loading, setLoading] = useState(() => true)
  useEffect(() => {
    axiosInstance((localStorage.getItem('currentUser') && 'Token ' + JSON.parse(localStorage.getItem('currentUser')).token) || '')(
      {
        url: 'api/favorite',
        method: 'get'
      }
    ).then(({ data }) => {
      setData(() => data.data)
      setLoading(() => false)

    }).catch(err =>
      console.log(err))
  }, [])
  return (
    <div className="Favorite">
      {loading ?
        <>
          <Loading />
        </>
        :
        <>
          {
            data.length > 0 ?
              data.map(data => <UserCard user={data} />)
              :
              <h3> No favorite added yet</h3>
          }
        </>
      }
    </div>
  );
};

export default Favorite;
