import io from './io';
// import Axios from 'axios';

export function getHotReleaseList(o) {
  return io({
    methods: 'get',
    url: '',
    testUrl: '/mock/hotReleaseList.json',
    data: o
  })
}

export function getPreReleaseList(o) {
  return io({
    methods: 'get',
    url: '',
    testUrl: '/mock/preReleaseList.json',
    data: o
  })
}
