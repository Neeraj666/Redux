import * as Action from './Action';

const is = {count:0};

const Reducer=(state=is, action)=>{

    switch(action.type){
        case Action.Inc : return{count : state.count+1};
        case Action.Dec : return{count : state.count-1};

        case Action.Inc_By_Val : return{count : state.count + action.payload};
        case Action.Dec_By_Val : return{count : state.count - action.payload};
        case Action.Reset : return is;
        default : return state;
    }
}
export default Reducer;