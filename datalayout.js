const offer = {
    offer_id: "int",
    offerer: "int",
    offeree: "int",
    desired_product_id: "int",
    offered_product_ids: "array of ints",
    posted_date: "date",
    resolution_date: "date",
    message: "text",
    status: "pending, accepted, rejected"
}

const newItem = {
    name: "text",
    owner: "text",
    ownerId: "int",
    value: "text",
    description: "text",
    desired_trade: "text",
    time_constraints: "text",
    images: "array of files",
    date: "new Date()",
    status: "available, pending, unavailable"
}

const itemListView = {
    id: "int",
    name: "text",
    image: "image",
    value: "text",
    owner: "text",
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
    messages: "array of objects, maybe all stored as JSON",
    new_message: "boolean"
}

const message = {
    id: "int",
    user_id: "int",
    user_name: "text",
    timestamp: "date",
    text: "text",
    seen: "boolean"
}