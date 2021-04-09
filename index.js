const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware;

const Buy_Book = "Buy_Book";
const Buy_Pen = "Buy_Pen";

const initialStateBooks = {
    numberOfBooks:10
}

const initialStatePens = {
    numberOfPens:20
}
function buyBook  (){
    return{
        
        type:Buy_Book,
        info:"My first information"
    }
}
function buyPen  (){
    return{
        
        type:Buy_Pen,
        info:"My second information"
    }
}

 const bookReducer = (state=initialStateBooks,action)=>{
     switch(action.type){
         case "Buy_Book":return{
             ...state,
             numberOfBooks: state.numberOfBooks-1
         }
         default:return state;
     }

 }

 const penReducer = (state=initialStatePens,action)=>{
    switch(action.type){
        case "Buy_Pen":return{
            ...state,
            numberOfPens: state. numberOfPens-5
        }
        default:return state;
    }

}

const reducer = combineReducers(
    {
        Book:bookReducer,
        Pen:penReducer
    }
);

const logger = store=>{
    return next =>{
        return action =>{
            const result = next(action);
            console.log("Middleware",result)
            return result;
        }
    }
}


 const store = createStore(reducer,applyMiddleware(logger));
 console.log("Initial State",store.getState());
 const unsubscribe= store.subscribe(()=>{console.log('Update State Value',store.getState())});
 store.dispatch(buyBook());
 store.dispatch(buyBook()); 
 store.dispatch(buyBook());
 store.dispatch(buyBook());
 store.dispatch(buyPen());
 store.dispatch(buyPen());
 store.dispatch(buyPen());
 unsubscribe();