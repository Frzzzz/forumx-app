import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import Leaderboard from '../components/Leaderboard';
import Header from '../components/Header';
import Loading from '../components/Loading';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <>
      <Header />
      <Loading />
      <section className="leaderboards-page">
        <h1 className="leaderboards-title">Klasemen Pengguna Aktif</h1>
        <div className="leaderboards_card">
          <div className="leaderboards_subcontainer">
            <div className="leaderboards_subitem">
              <h5 className="leaderboards_sub">Pengguna</h5>
            </div>
            <div className="leaderboards_subitem">
              <h5 className="lpage__sub">Skor</h5>
            </div>
          </div>
          {leaderboards.map(({ user, score }) => (
            <Leaderboard key={user.id} user={user} score={score} />
          ))}
        </div>
      </section>
    </>
  );
}
export default LeaderboardsPage;
