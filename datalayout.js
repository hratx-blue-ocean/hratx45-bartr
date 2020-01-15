////ROUTES

//GET

let getLoggedInUserInfoById = {
    //"long-polling" method - keep connection to server/db alive to send back any changes - is this possible?
    type: "get",
    request: "logged-in user id",
    response: loggedInUserInfo
} //login

let getNineItemsByLocation = {
    type: "get",
    request: "location",
    response: [homepageItem/*(x9)*/]
} //homepage

let getFiftyItemsByValue = {
    type: "get",
    request: "itemValue",
    response: [itemListView/*(x50)*/]
} //feed

let getFiftyItemsByDistance = {
    type: "get",
    request: "location",
    response: [itemListView/*(x50)*/]
} //feed

let getFiftyItemsByPostDate = {
    type: "get",
    request: "postDate",
    response: [itemListView/*(x50)*/]
} //feed

let getFiftyItemsByNameIncludes ={
    type: "get",
    request: "searchInput text",
    response: [itemListView/*(x50)*/]
} //feed


//if long-polling/keep-alive does not work/isn't feasible, we'll need these instead of the overarching "getLoggedInInfoByUser"

let getMessageThreadsByUserId = {
    type: "get",
    request: "userId",
    response: [messageThread, messageThread, ...] //message threads should include logged-in user
} //message inbox

let getUpForTradeItemsByUserId = {
    type: "get",
    request: "userId",
    response: [itemListView, itemListView, ...]
}

let getHasNewMessageBool = {
    type: "get",
    request: "userId",
    response: hasNewMessage
} //navbar

let getActiveOffersByUserId = {
    type: "get",
    request: "userId",
    response: [offerGet, offerGet, ...] //offers should include logged-in user id and have the status "pending"
} //active offers

let getClosedOffersByUserId = {
    type: "get",
    request: "userId",
    response: [offerGet, offerGet, ...] //offers should include logged-in user id and have the status "rejected" or "accepted"
} //past offers

//POST

let authenticateUser = {
    type: "post",
    request: loginInfo,
    respone: "logged-in userId"
} //login

let addUser = {
    type: "post",
    request: signupInfo,
    response: null
} //signup

let updateOfferStatus = {
    type: "post",
    request: {offer_id: "int", new_offer_status: "rejected, accepted"},
    response: null
} //anywhere that has a "accept/reject offer" button

let postItem = {
    type: "post",
    request: newItem,
    response: null
} //upload item page

let makeOffer = {
    type: "post",
    request: newOffer,
    response: null
} //make offer page

////POST OBJECTS

const newOffer = {
    offer_id: "int",
    offerer: "int",
    offeree: "int",
    desired_product_id: "int",
    offered_product_ids: "array of ints",
    offer_made_date: "date",
    resolution_date: "date",
    message: "text",
    status: "pending, accepted, rejected"
}    

const newItem = {
    name: "text",
    owner: "text",
    ownerId: "int",
    location: "location",
    value: "text",
    description: "text",
    desired_trade: "text",
    time_constraints: "text",
    images: "array of files",
    date: "new Date()",
    status: "available, pending, unavailable"
}    

const loginInfo = {
    username: "text",
    password: "text"
}    

const signupInfo = {
    first_name: "text",
    last_name: "text",
    username: "text",
    password: "text",
    email: "text",
    zipcode: "int",
    profile_picture: "image file"
}    

////GET OBJECTS

const offerGet = {
    offer_id: "int",
    offerer: "int",
    offeree: "int",
    desired_product_id: "int",
    desired_product_name: "text",
    desired_product_image: "image file",
    offered_product_ids: "array of ints",
    offered_product_names: "array of text names",
    offer_made_date: "date",
    offer_closed_date: "date",
    status: "pending, accepted, rejected",
    message_thread_id: "int"
}    

const itemListView = {
    id: "int",
    name: "text",
    image: "image",
    value: "text",
    owner_username: "text",
    owner_id: "int",
    location: "location",
    post_date: "date",
    status: "available, pending, unavailable"
}    

const messageThread = {
    id: "int",
    user_one_id: "int",
    user_two_id: "int",
    user_one_name: "text",
    user_two_name: "text",
    messages: [message, message, ...],
    new_message: "boolean"
}    

const message = {
    id: "int",
    sender_id: "int",
    sender_name: "text",
    recipient_id: "int",
    recipient_name: "text",
    timestamp: "timestamp as text",
    text: "text",
    seen: "boolean"
}    

const hasNewMessage = {
    has_new_message: "boolean indicating whether the user has a new message in their inbox"
}    

const userProfile = {
    first_name: "text",
    last_name: "text",
    username: "text",
    profile_picture: "image file",
    zip_code: "int",
    exact_location: "location",
}    

const homepageItem = {
    picture: "image",
    item_name: "text",
    item_id: "int"
}    

const loggedInUserInfo = {
    id: "int",
    userProfile: {
        first_name: "text",
        last_name: "text",
        username: "text",
        profile_picture: "image file",
        zip_code: "int",
        exact_location: "location (using Google API?)"
    },    
    upForTrade: [itemListView, itemListView, ...], //items should only belong to logged-in user id
    activeOffers: [offerGet, offerGet, ...], //offers should include logged-in user id and have the status "pending"
    closedOffers: [offerGet, offerGet, ...], //offers should include logged-in user id and have the status "rejected" or "accepted"
    messageThreads: [messageThread, messageThread, ...] //message threads should include logged-in user
}    


