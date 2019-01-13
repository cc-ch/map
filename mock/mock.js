import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock('/api/user', {
    'count': [
        "32.29446",
        "58.858182"
    ],
});