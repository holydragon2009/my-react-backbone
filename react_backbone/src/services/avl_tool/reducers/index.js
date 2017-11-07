import { combineReducers } from "redux";
import * as type from '../../redux/actions';

const filterData = {
  events: [1,3,4,5],
  vehicles: [1,3,7,8,9],
  units: [1,3,5,7,9],
  timeframes: [
    {
      from: 12348890,
      to: 12349990
    },
    {
      from: 11112222,
      to: 11113333
    }
  ],
  locations: {
    points: [
      {
        lat: 10.7833937,
        lng: 106.7057734,
        unit: 'km'
      },
      {
        lat: 10.7782926,
        lng: 106.7000227,
        unit: 'mile'
      }
    ],
    points: [
      {
        lat: 10.783193,
        lng: 106.6785594,
        unit: 'km'
      },
      {
        lat: 10.7774595,
        lng: 106.6822501,
        unit: 'mile'
      }
    ],
    polygons: [
      {
        lat: 10.7782926,
        lng: 106.7000227,
        order: 1
      },
      {
        lat: 10.777260,
        lng: 106.674724,
        order: 2
      },
      {
        lat: 10.787657,
        lng: 106.663754,
        order: 3
      },
      {
        lat: 10.805529,
        lng: 106.663212,
        order: 4
      }
    ]
  }
}

export const updateFilters = (state = {
    filter: filterData,
    isChanged: false,
    viewId: 0
  }, action) => {
  switch(action.type) {
    case type.UPDATE_TOOL_FILTER:
      return {
        ...state,
        isChanged: action.isChanged,
        viewId: action.viewId,
        filter: action.filter
      }
    default:
      return state;
  }
}