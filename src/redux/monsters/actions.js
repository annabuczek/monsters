import actionTypes from '../actionTypes';
import api from '../../api/monstersApi';

export const fetchMonstersRequested = () => {
  return {
    type: actionTypes.FETCH_MONSTERS_REQUESTED,
  };
};

export const fetchMonstersFailed = (error) => {
  return {
    type: actionTypes.FETCH_MONSTERS_FAILED,
    error,
  };
};

export const fetchMonsterRequested = () => {
  return {
    type: actionTypes.FETCH_MONSTER_REQUESTED,
  };
};

export const fetchMonsterSucceeded = (monster) => {
  return {
    type: actionTypes.FETCH_MONSTER_SUCCEEDED,
    monster,
  };
};

export const fetchMonsters = () => async (dispatch) => {
  dispatch(fetchMonstersRequested());
  try {
    const {
      data: { data },
    } = await api.get('/monsters');
    data.forEach((monster) => {
      dispatch(fetchMonster(monster.slug));
    });
  } catch (error) {
    dispatch(fetchMonstersFailed(error.message));
  }
};

export const fetchMonster = (slug) => async (dispatch) => {
  dispatch(fetchMonsterRequested());
  try {
    const {
      data: { data },
    } = await api.get(`/monster/${slug}`);
    dispatch(fetchMonsterSucceeded(data));
  } catch (error) {
    dispatch(fetchMonstersFailed(error.message));
  }
};
