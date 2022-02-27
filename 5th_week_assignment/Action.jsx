export const addEntries=(event)=>{
    return {
        type: "Add_Entries",
        event:event
    }
}
export const deleteEntries=(id)=>{
    return {
        type: "Delete_Entries",
        id:id
    }
}