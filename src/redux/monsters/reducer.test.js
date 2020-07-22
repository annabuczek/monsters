import reducer from './reducer';
import {
  fetchMonstersRequested,
  fetchMonsterRequested,
  fetchMonstersFailed,
  fetchMonsterSucceeded,
} from './actions';

describe('monsters reducer', () => {
  const initialState = { fetching: false, error: '', data: [] };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('sets fetching value when monsters fetch requested', () => {
    expect(reducer(initialState, fetchMonstersRequested())).toEqual({
      fetching: true,
      error: '',
      data: [],
    });
  });

  it('sets fetching value when monster fetch requested', () => {
    expect(reducer(initialState, fetchMonsterRequested())).toEqual({
      fetching: true,
      error: '',
      data: [],
    });
  });

  it('sets error when monsters fetch failed', () => {
    expect(
      reducer(
        initialState,
        fetchMonstersFailed('Request failed with status code 404'),
      ),
    ).toEqual({
      fetching: false,
      error: 'Request failed with status code 404',
      data: [],
    });
  });

  it('sets data when monster fetch succeeded', () => {
    const data = [
      {
        name: 'Monster-1',
        description: 'Ipsum lorem',
        images: {},
        statistics: {},
      },
    ];

    const fetchedMonster = {
      name: 'Monster-2',
      description: 'Lorem ipsum',
      images: {},
      statistics: {},
    };

    expect(
      reducer(
        { ...initialState, data },
        fetchMonsterSucceeded(fetchedMonster),
      ),
    ).toEqual({
      fetching: false,
      error: '',
      data: [...data, fetchedMonster],
    });
  });
});
