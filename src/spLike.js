import { configureStore, createSlice } from "@reduxjs/toolkit";

let spLike = createSlice(
    {
        name:{irum : 'spLike'},
        initialState:0,
        reducers:{
            changeCount(state,actions){
                let num = state + actions.payload;
                return  num;
            }
        }
    }
);

export let {changeCount} = spLike.actions;

let spiderman = createSlice(
    {
        name:'spiderman',
        initialState:[
            {
                titleimg:'https://w.namu.la/s/696800995534f8d24ceb590be194b42703ff74f717edddc3b12718a24ddcc68bb31579697a6297318841f7e2c96101bbe91d3243469f21546d45ff4cdcd85a9c0aeceea76bf64b1961aa89bd2a3ac13c23fe5909660e11ac33681d760dbdd6b7b3a7e61ea303f818f0ca2f46b67a4693',
                imgs:['https://p4.wallpaperbetter.com/wallpaper/763/710/546/spiderman-no-way-home-spiderverse-superhero-movies-digital-hd-wallpaper-preview.jpg',
                'https://p4.wallpaperbetter.com/wallpaper/59/201/135/spider-man-spider-man-no-way-home-hd-wallpaper-preview.jpg',
                'https://image.ytn.co.kr/general/jpg/2021/1220/202112200910392955_t.jpg']
            }
        ]
    }
)



export default configureStore({
    reducer:{
        spLike : spLike.reducer
    }
});