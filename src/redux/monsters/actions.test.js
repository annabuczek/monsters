import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import api from '../../api/monstersApi';
import actionTypes from '../actionTypes';
import {
  fetchMonstersRequested,
  fetchMonsterRequested,
  fetchMonstersFailed,
  fetchMonsterSucceeded,
  fetchMonsters,
  fetchMonster,
} from './actions';

const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(api);

describe('monsters actions', () => {
  describe('fetchMonstersRequested', () => {
    it('creates FETCH_MONSTERS_REQUESTED action', () => {
      const expectedAction = {
        type: actionTypes.FETCH_MONSTERS_REQUESTED,
      };

      expect(fetchMonstersRequested()).toEqual(expectedAction);
    });
  });

  describe('fetchMonstersFailed', () => {
    it('creates FETCH_MONSTERS_FAILED action', () => {
      const expectedAction = {
        type: actionTypes.FETCH_MONSTERS_FAILED,
        error: 'Request failed with status code 404',
      };

      expect(
        fetchMonstersFailed('Request failed with status code 404'),
      ).toEqual(expectedAction);
    });
  });

  describe('fetchMonsterRequested', () => {
    it('creates FETCH_MONSTER_REQUESTED action', () => {
      const expectedAction = {
        type: actionTypes.FETCH_MONSTER_REQUESTED,
      };

      expect(fetchMonsterRequested()).toEqual(expectedAction);
    });
  });

  describe('fetchMonsterSucceeded', () => {
    it('creates FETCH_MONSTER_SUCCEEDED action', () => {
      const monster = {
        name: 'Monster',
        description: 'Lorem ipsum',
        images: {},
        statistics: {},
      };

      const expectedAction = {
        type: actionTypes.FETCH_MONSTER_SUCCEEDED,
        monster,
      };

      expect(fetchMonsterSucceeded(monster)).toEqual(expectedAction);
    });
  });

  describe('fetchMonsters', () => {
    it('creates actions when fetch succeeded', () => {
      const monsters = {
        data: [
          { name: 'Monster-1', slug: 'monster-1', images: {} },
          { name: 'Monster-2', slug: 'monster-2', images: {} },
        ],
      };
      mockAdapter.onGet('/monsters').reply(200, monsters);

      const expectedActions = [
        fetchMonstersRequested(),
        fetchMonsterRequested(),
        fetchMonsterRequested(),
      ];

      const store = mockStore({ data: [] });

      return store.dispatch(fetchMonsters()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates actions when fetch failed', () => {
      mockAdapter.onGet('/monsters').reply(404, {
        message: 'Request failed with status code 404',
      });

      const expectedActions = [
        fetchMonstersRequested(),
        fetchMonstersFailed('Request failed with status code 404'),
      ];

      const store = mockStore({ data: [] });

      return store.dispatch(fetchMonsters()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetchMonster', () => {
    const slug = 'monster-1';

    it('creates actions when fetch succeeded', () => {
      const monster = {
        data: {
          name: 'Monster-1',
          description: 'Lorem ipsum',
          images: {},
          statistics: {},
        },
      };

      mockAdapter.onGet(`/monster/${slug}`).reply(200, monster);

      const expectedActions = [
        fetchMonsterRequested(),
        fetchMonsterSucceeded(monster.data),
      ];

      const store = mockStore({ data: [] });

      return store.dispatch(fetchMonster(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates actions when fetch failed', () => {
      mockAdapter.onGet(`/monster/${slug}`).reply(404, {
        message: 'Request failed with status code 404',
      });

      const expectedActions = [
        fetchMonsterRequested(),
        fetchMonstersFailed('Request failed with status code 404'),
      ];

      const store = mockStore({ data: [] });

      return store.dispatch(fetchMonster(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
