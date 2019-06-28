const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [{
        name: '寂静之声',
        artist: '贵族乐团',
        url: 'http://www.ytmp3.cn/down/51800.mp3',
        cover: 'http://img.ytmp3.cn/image/90.jpg'
    },
    {
        name: '故乡的原风景',
        artist: '宗次郎',
        url: 'http://www.ytmp3.cn/down/46084.mp3',
        cover: 'http://img.ytmp3.cn/image/4.jpg'
    }]
});
