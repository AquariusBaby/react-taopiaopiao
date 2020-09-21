import io from './io';

export function getCinemaInfo(o) {
    return io({
        methods: 'get',
        url: '',
        testUrl: '/mock/cinemaInfo.json',
        data: o
    })
}

export function getCinemaBySite(o) {
    return io({
        methods: 'get',
        url: '',
        testUrl: '/mock/cinemaSite.json',
        data: o
    })
}