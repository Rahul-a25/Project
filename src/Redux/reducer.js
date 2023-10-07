const initial={
   Allcategory:[],
   Mobile:[],
   MobileData:[],
   Cart:[]
}
const reducer=(state=initial,action)=>{
    switch(action.type){
    case 'category':
        state={
            ...state,
            Allcategory:action.payload
        }
        break;
        case 'mobile':
        state={
            ...state,
            Mobile:action.payload
        }
        break;
        case 'mobiledata':
        state={
            ...state,
            MobileData:state.Mobile.filter((e)=>e.name==='mobile 6 new1234')
        }
        break;
        case 'cart':
        state={
            ...state,
            Cart:[...state.Cart,action.payload]
        }
        break;
        case 'delete':
        state={
            ...state,
            Cart: state.Cart.filter((id) =>action.payload!=id )
        }
        break;
    }
  return state
}
export default reducer;